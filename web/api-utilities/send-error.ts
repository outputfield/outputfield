import { NextApiResponse } from "next";
import { ErrorWithMessage } from "../api-client/errors";

export const sendError = (
  res: NextApiResponse<ErrorWithMessage>,
  status: number,
  message: string
) => {
  if (status < 400) {
    throw new Error(`bad error status: ${status}`);
  }
  res.statusMessage = message;
  return res.status(status).json({ message });
};
