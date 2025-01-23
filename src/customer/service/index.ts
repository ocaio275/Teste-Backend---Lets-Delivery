import { randomUUID } from "node:crypto";
import { CustomerRequest } from "./types";
import { ICustomerRepository } from "../interface";

class CustomerService {
  private customerRepository: ICustomerRepository;
  constructor(customerRepository: ICustomerRepository) {
    this.customerRepository = customerRepository;
  }
  async createCustomer(customer: CustomerRequest) {
    customer.id = randomUUID();
    const response = await this.customerRepository.createCustomer(customer);
    return response;
  }

  async getAllCustomers() {
    return this.customerRepository.getAllCustomers();
  }

  async getCustomerById(id: string) {
    const response = await this.customerRepository.getCustomerById(id);
    return response;
  }

  async updateCustomer(id: string, data: Partial<CustomerRequest>) {
    return this.customerRepository.updateCustomer(id, data);
  }

  async deleteCustomer(id: string) {
    return this.customerRepository.deleteCustomer(id);
  }
}

export default CustomerService;
