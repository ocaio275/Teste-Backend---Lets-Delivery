import {
  PutItemCommand,
  GetItemCommand,
  ScanCommand,
  DeleteItemCommand,
  UpdateItemCommand,
} from "@aws-sdk/client-dynamodb";
import { unmarshall, marshall } from "@aws-sdk/util-dynamodb";
import { dbClient } from "../../utils/dynamoDb";
import { ICustomerRepository } from "../interface";
import { CustomerModel } from "../model";

class CustomerRepository implements ICustomerRepository {
  private dbClint = dbClient;
  private tableCustomer: string = process.env.CUSTOMER_TABLE;
  constructor() {
    this.dbClint;
    this.tableCustomer;
  }
  async createCustomer(customer: CustomerModel): Promise<{
    statusCode: number;
    data: CustomerModel;
  }> {
    try {
      const params = {
        TableName: this.tableCustomer,
        Item: marshall(customer),
      };

      const { $metadata } = await this.dbClint.send(new PutItemCommand(params));

      return {
        statusCode: $metadata.httpStatusCode,
        data: customer,
      };
    } catch (error) {
      console.error("error: ", error);
      throw new Error("err", error);
    }
  }
  async getAllCustomers(): Promise<{
    data: unknown[];
    statusCode: number;
  }> {
    try {
      const params = {
        TableName: this.tableCustomer,
      };

      const { $metadata, Items } = await this.dbClint.send(
        new ScanCommand(params)
      );

      return {
        statusCode: $metadata.httpStatusCode,
        data: Items.map((item) => unmarshall(item)),
      };
    } catch (error) {
      console.error("error: ", error);
      throw new Error();
    }
  }

  async getCustomerById(id: string): Promise<{
    data: CustomerModel;
    statusCode: number;
  }> {
    try {
      const params = {
        TableName: this.tableCustomer,
        Key: {
          id: marshall(id),
        },
      };

      const { $metadata, Item } = await this.dbClint.send(
        new GetItemCommand(params)
      );

      return {
        data: unmarshall(Item) as CustomerModel,
        statusCode: $metadata.httpStatusCode,
      };
    } catch (error) {
      console.error("error: ", error);
      throw new Error();
    }
  }

  async updateCustomer(
    id: string,
    customer: Partial<CustomerModel>
  ): Promise<{
    statusCode: number;
  }> {
    try {
      const { fullName, dateOfBirth, isActive } = customer;
      const params = {
        TableName: this.tableCustomer,
        Key: { id: marshall(id) },
        UpdateExpression:
          "set " +
          "#fullName =  :fullName, " +
          "#dateOfBirth =  :dateOfBirth, " +
          "#isActive =  :isActive",

        ExpressionAttributeNames: {
          "#fullName": "fullName",
          "#dateOfBirth": "dateOfBirth",
          "#isActive": "isActive",
        },
        ExpressionAttributeValues: marshall({
          ":fullName": fullName,
          ":dateOfBirth": dateOfBirth,
          ":isActive": isActive,
        }),
      };

      const { $metadata } = await this.dbClint.send(
        new UpdateItemCommand(params)
      );

      return {
        statusCode: $metadata.httpStatusCode,
      };
    } catch (error) {
      console.error(error);
    }
  }

  async deleteCustomer(id: string): Promise<{
    statusCode: number;
  }> {
    try {
      const params = {
        TableName: this.tableCustomer,
        Key: { id: marshall(id) },
      };
      const { $metadata } = await this.dbClint.send(
        new DeleteItemCommand(params)
      );

      return {
        statusCode: $metadata.httpStatusCode,
      };
    } catch (error) {
      console.error(error);
      throw new Error();
    }
  }
}

export default CustomerRepository;
