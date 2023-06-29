import { Address } from './address.model';
import { CustomPCBuild } from './custom-pc-build.model';
import { Order } from './order.model';

export class Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  addresses: Address[];
  customPCBuilds: CustomPCBuild[];
  orders: Order[];

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    addresses: Address[],
    customPCBuilds: CustomPCBuild[],
    orders: Order[]
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.addresses = addresses;
    this.customPCBuilds = customPCBuilds;
    this.orders = orders;
  }
}