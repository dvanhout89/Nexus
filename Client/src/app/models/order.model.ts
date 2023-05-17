import { OrderItem } from "./order-item.model";

export class Order {
    id?: number;
    date?: Date;
    totalAmount?: number;
    customerId?: number;
    orderItems?: OrderItem[];
}
