import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { ErrorWithMessage } from "../../api-client/errors";
import { SignupRequest, SignupResponse } from "../../api-client/signup";
import { sendError } from "../../api-utilities/send-error";
import client from "../../client";


const addSignupToSanity = async (request: SignupRequest) => {
  /**
  This function collects the parameter for sending them to sanit database.
  :returns register: that information is sent to Sanity.
    */
  const register = {
    _type: "signupform",
    data: {
      email: request.email,
    },
  };
  return await client.create(register);
};


function getRequestParams(email) {
  /**
  This function collects the parameter for sending them to mailchimp.
  :param email: email address as string.
  :returns url, data, headers: these go to database.
    */
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;
  const DATACENTER = process.env.MAILCHIMP_DATACENTER_KEY;
  //const DATACENTER = process.env.MAILCHIMP_API_KEY.split("-")[1];

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${base64ApiKey}`,
  };

  return {
    url,
    data,
    headers,
  };
}

/**
 * Send a POST request to /api/signup with a body
 * of SignupRequest to signup a user. However,
 * prefer using sendSignup from api-client/signup
 * for neatness
 *
 */
export default async (
  req: NextApiRequest,
  res: NextApiResponse<SignupResponse | ErrorWithMessage>
) => {
  if (req.method !== "POST") {
    throw new Error("Only accepts POSTs with body of { email: string }");
  }

  const { email } = req.body;
  const signupRequest = req.body as SignupRequest;

  if (typeof signupRequest?.email !== "string") {
    throw new Error("Missing email");
  }

  try {
    const { url, data, headers } = getRequestParams(email);
    const response = await axios.post(url, data, { headers });

    await addSignupToSanity(signupRequest);

    return res.status(200).json({ email: signupRequest.email });
  } catch (event) {
    if (event.statusCode === 403) {
      console.error("Mailchimp isn't authorized!!");
      return sendError(res, 500, "Internal auth issue");
    } else {
      return sendError(res, 500, "Failed to send to mailchimp");
    }
  }
};
