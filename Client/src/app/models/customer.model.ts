import { Address } from './address.model';
import { CustomPCBuild } from './custom-pc-build.model';
import { Order } from './order.model';

export class Customer {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: Address[];
  customPCBuilds?: CustomPCBuild[];
  orders?: Order[];
}