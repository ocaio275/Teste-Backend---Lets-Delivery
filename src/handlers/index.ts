import CustomerController from "../customer/controller";
import { APIGatewayEvent } from "aws-lambda";

const controller = new CustomerController();

export const createCustomer = async (event: APIGatewayEvent) => {
  const { body } = event;
  return controller.createCustomer(JSON.parse(body));
};

export const deleteCustomer = async (event: APIGatewayEvent) => {
  const { id } = event.pathParameters;
  return controller.deleteCustomerById(id);
};

export const getAllCustomers = async () => {
  return controller.getAllCustomers();
};

export const getCustomerById = async (event: APIGatewayEvent) => {
  const { id } = event.pathParameters;
  return controller.getCustomerById(id);
};

export const updateCustomerById = async (event: APIGatewayEvent) => {
  const { id } = event.pathParameters;
  const { body } = event;
  return controller.updateCustomerById(id, JSON.parse(body));
};
