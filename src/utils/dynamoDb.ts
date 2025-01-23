import { CreateTableCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";

export const dbClient = new DynamoDBClient({
  region: "local",
  endpoint: "http://localhost:8000",
});
