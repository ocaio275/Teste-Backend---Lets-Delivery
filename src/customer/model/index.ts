export class CustomerModel {
  constructor(
    public fullName: string,
    public dateOfBirth: string,
    public isActive: boolean,
    public listAddress: {
      street: string;
      number: number;
      complement?: string;
      neighborhood: string;
      city: string;
      state: string;
      zipCode: string;
    }[],
    public listContact: {
      email: string;
      phone: string;
      isMain?: boolean;
    }[],
    public id?: string,
  ) {}
}
