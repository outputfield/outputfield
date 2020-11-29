import type { NextApiRequest, NextApiResponse } from "next";
import { ErrorWithMessage } from "../../api-client/errors";
import { SignupRequest, SignupResponse } from "../../api-client/signup";
import { sendError } from "../../api-utilities/send-error";
import client from "../../client";

const addSignupToSanity = async (request: SignupRequest) => {
  const register = {
    _type: "signupform",
    data: {
      email: request.email,
    },
  };
  return await client.create(register);
};

/**
 * Send a POST request to /api/signup with a body
 * of SignupRequest to signup a user. However,
 * prefer using sendSignup from api-client/signup
 * for neatness
 * */
export default async (
  req: NextApiRequest,
  res: NextApiResponse<SignupResponse | ErrorWithMessage>
) => {
  if (req.method !== "POST") {
    throw new Error("Only accepts POSTs with body of { email: string }");
  }

  const signupRequest = req.body as SignupRequest;

  if (typeof signupRequest?.email !== "string") {
    throw new Error("Missing email");
  }

  try {
    await addSignupToSanity(signupRequest);
  } catch (e) {
    if (e.statusCode === 403) {
      console.error("Sanity isn't authorized!!");
      return sendError(res, 500, "Internal auth issue");
    } else {
      return sendError(res, 500, "Failed to send to sanity");
    }
  }

  res.status(200).json({ email: signupRequest.email });
};
