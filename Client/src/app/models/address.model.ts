export class Address {
    id: number;
    street: string;
    city: string;
    state: string;
    postalCode: string;
  
    constructor(id: number, street: string, city: string, state: string, postalCode: string) {
      this.id = id;
      this.street = street;
      this.city = city;
      this.state = state;
      this.postalCode = postalCode;
    }
  }