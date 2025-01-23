import test from "node:test";
import CustomerService from "../src/customer/service";
import { MockCustomerRepository } from "./mock/mockCustomerRepository";
import assert from "node:assert";

test.describe("CustomerService", async () => {
  test("should create customer", async () => {
    const service = new CustomerService(new MockCustomerRepository());
    const data = await service.createCustomer({
      fullName: "Mirelly Viana",
      dateOfBirth: "16/08/99",
      isActive: true,
      listAddress: [
        {
          street: "Estrada do Limoeiro",
          number: 595,
          complement: "apt 107 bloco 7",
          neighborhood: "Vila Branca",
          city: "Jacareí",
          state: "SP",
          zipCode: "12305-810",
        },
      ],
      listContact: [
        {
          email: "caio@test.com",
          phone: "(11)99999-9999",
          isMain: true,
        },
      ],
    });

    assert.equal(data.statusCode, 200);
    assert.ok(data.data.hasOwnProperty("id"));
    assert.ok(data.data.hasOwnProperty("fullName"));
    assert.ok(data.data.hasOwnProperty("dateOfBirth"));
    assert.ok(data.data.hasOwnProperty("isActive"));
    assert.ok(data.data.hasOwnProperty("listAddress"));
    assert.ok(data.data.hasOwnProperty("listContact"));
  });

  test("should list all customers", async () => {
    const service = new CustomerService(new MockCustomerRepository());
    const { data, statusCode } = await service.getAllCustomers();

    assert.equal(statusCode, 200);
    assert.strictEqual(typeof data, "object");
  });

  test("should get by id customer", async () => {
    const service = new CustomerService(new MockCustomerRepository());
    const id = "ABCD-1234";
    const { data, statusCode } = await service.getCustomerById(id);

    assert.equal(statusCode, 200);
    assert.equal(id, data.id);
  });

  test("should update customer", async () => {
    const service = new CustomerService(new MockCustomerRepository());
    const id = "ABCD-1234";
    const mock = {
      fullName: "joão",
    };

    const { statusCode } = await service.updateCustomer(id, mock);

    assert.equal(statusCode, 200);
  });

  test("should remove customer", async () => {
    const service = new CustomerService(new MockCustomerRepository());
    const id = "ABCD-1234";
    const { statusCode } = await service.deleteCustomer(id);

    assert.equal(statusCode, 200);
  });
});
