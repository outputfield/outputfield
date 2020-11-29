import { AxiosError } from "axios";

export interface ErrorWithMessage {
  message: string;
}

// Only good for errors from our own API from axios requests
export const getErrorMessage = (
  error: Error,
  defaultMessage: string = "An unknown error occurred"
) => {
  return (error as AxiosError)?.response?.data?.message ?? defaultMessage;
};
