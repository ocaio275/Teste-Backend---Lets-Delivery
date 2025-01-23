import { APIGatewayProxyResult } from "aws-lambda";
import CustomerService from "../service";
import { CustomerRequest } from "../service/types";
import { ResponseMessages } from "../../utils/constants";
import { validateRequest } from "../../middleware/validateRequest";
import CustomerRepository from "../repository";

class CustomerController {
  private customerService: CustomerService;
  constructor() {
    this.customerService = new CustomerService(new CustomerRepository());
  }

  async createCustomer(data: CustomerRequest): Promise<APIGatewayProxyResult> {
    try {
      if (validateRequest(data)) {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: ResponseMessages.BAD_REQUEST }),
        };
      }
      await this.customerService.createCustomer(data);

      return {
        statusCode: 201,
        body: JSON.stringify({
          message: ResponseMessages.CREATED,
        }),
      };
    } catch (error) {
      console.error("Erro na Lambda:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: ResponseMessages.INTERNAL_SERVER_ERROR }),
      };
    }
  }

  async getAllCustomers() {
    try {
      const response = await this.customerService.getAllCustomers();
      if (!response) {
        return {
          statusCode: 404,
          body: JSON.stringify({ error: ResponseMessages.NOT_FOUND }),
        };
      }

      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: ResponseMessages.INTERNAL_SERVER_ERROR }),
      };
    }
  }

  async getCustomerById(id: string): Promise<APIGatewayProxyResult> {
    try {
      const response = await this.customerService.getCustomerById(id);
      if (!response) {
        return {
          statusCode: 404,
          body: JSON.stringify({ error: ResponseMessages.NOT_FOUND }),
        };
      }
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: ResponseMessages.INTERNAL_SERVER_ERROR }),
      };
    }
  }

  async updateCustomerById(
    id: string,
    data: Partial<CustomerRequest>
  ): Promise<APIGatewayProxyResult> {
    try {
      const response = await this.customerService.updateCustomer(id, data);
      return {
        statusCode: 200,
        body: JSON.stringify({ message: ResponseMessages.OK }),
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: ResponseMessages.INTERNAL_SERVER_ERROR }),
      };
    }
  }

  async deleteCustomerById(id: string): Promise<APIGatewayProxyResult> {
    try {
      await this.customerService.deleteCustomer(id);

      return {
        statusCode: 200,
        body: JSON.stringify({ message: ResponseMessages.OK }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: ResponseMessages.INTERNAL_SERVER_ERROR }),
      };
    }
  }
}

export default CustomerController;
