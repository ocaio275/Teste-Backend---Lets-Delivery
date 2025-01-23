interface ListAddress {
    street: string;
    number: number;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
}

interface ListContact {
    email: string;
    phone: string;
    isMain?: boolean
}

export interface CustomerRequest {
    id?: string;
    fullName: string;
    dateOfBirth: string;
    isActive: boolean;
    listAddress: ListAddress[]
    listContact: ListContact[]
}