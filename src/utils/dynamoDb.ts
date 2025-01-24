import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const { REGION, ENDPOINT_DYNAMODB, ACCESS_KEY_ID, SECRET_ACCESS_KEY } =
  process.env;

console.log(REGION);
export const dbClient = new DynamoDBClient({
  region: REGION,
  endpoint: ENDPOINT_DYNAMODB,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
});
