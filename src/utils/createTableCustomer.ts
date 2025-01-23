import { CreateTableCommand } from "@aws-sdk/client-dynamodb";
import { dbClient } from "./dynamoDb";

dbClient
  .send(
    new CreateTableCommand({
      AttributeDefinitions: [
        {
          AttributeName: "id",
          AttributeType: "S",
        },
      ],
      KeySchema: [
        {
          AttributeName: "id",
          KeyType: "HASH",
        },
      ],
      TableName: "Customer",
      BillingMode: "PAY_PER_REQUEST",
    })
  )
  .then(() => console.log("Tabela criada com sucesso"))
  .catch(() => console.log("Erro ao criar tabale"));
