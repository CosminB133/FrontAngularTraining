import {Product} from './product.model';

export class Order {
  constructor(
    public id: string,
    public name: string,
    public comments: string,
    public products: string[]
  ) {}
}
