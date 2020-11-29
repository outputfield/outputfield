import axios from "axios";

export interface SignupRequest {
  email: string;
}

// The same fore now
export type SignupResponse = SignupRequest;

export const sendSignup = async (request: SignupRequest) => {
  const response = await axios.post("/api/signup", request);
  return response.data as SignupResponse;
};
