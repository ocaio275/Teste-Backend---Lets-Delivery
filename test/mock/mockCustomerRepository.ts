import { ICustomerRepository } from "../../src/customer/interface";
import { CustomerModel } from "../../src/customer/model";

export class MockCustomerRepository implements ICustomerRepository {
  private mockCustomers: CustomerModel[] = [
    {
      id: "ABCD-1234",
      fullName: "joão gomes",
      dateOfBirth: "16/08/99",
      isActive: true,
      listAddress: [
        {
          street: "AV Brasil",
          number: 123,
          complement: "apt 404 bloco 12",
          neighborhood: "Villa",
          city: "São Paulo",
          state: "SP",
          zipCode: "12345-678",
        },
      ],
      listContact: [
        {
          email: "joao@test.com",
          phone: "(11)99999-9999",
          isMain: true,
        },
      ],
    },
  ];
  constructor() {}

  async createCustomer(
    customer: CustomerModel
  ): Promise<{ statusCode: number; data: CustomerModel }> {
    this.mockCustomers.push(customer);
    return {
      statusCode: 200,
      data: customer,
    };
  }

  async getAllCustomers(): Promise<{
    statusCode: number;
    data: unknown[];
  }> {
    return {
      statusCode: 200,
      data: this.mockCustomers,
    };
  }
  async getCustomerById(
    id: string
  ): Promise<{ statusCode: 200; data: CustomerModel }> {
    return {
      data: this.mockCustomers.find((customer) => customer.id === id),
      statusCode: 200,
    };
  }

  async updateCustomer(
    id: string,
    data: Partial<CustomerModel>
  ): Promise<{
    statusCode: number;
  }> {
    return { statusCode: 200 };
  }

  async deleteCustomer(id: string): Promise<{ statusCode: number }> {
    return {
      statusCode: 200,
    };
  }
}
