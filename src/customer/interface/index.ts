import { CustomerModel } from "../model";

export interface ICustomerRepository {
  createCustomer(
    customer: CustomerModel
  ): Promise<{ statusCode: number; data: CustomerModel }>;
  getAllCustomers(): Promise<{ statusCode: number; data: unknown[] }>;
  getCustomerById(
    id: string
  ): Promise<{ statusCode: number; data: CustomerModel }>;
  updateCustomer(
    id: string,
    data: Partial<CustomerModel>
  ): Promise<{ statusCode: number }>;
  deleteCustomer(id: string): Promise<{ statusCode: number }>;
}
