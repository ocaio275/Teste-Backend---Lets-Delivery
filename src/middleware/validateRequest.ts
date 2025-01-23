import { APIGatewayProxyResult } from "aws-lambda";
import { ResponseMessages } from "../utils/constants";

export const validateRequest = (request) => {
  if (!request.fullName) return true;

  return false;
};
