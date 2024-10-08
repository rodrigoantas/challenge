export enum ProductType {
  PHYSICAL = 'PHYSICAL',
  BOOK = 'BOOK',
  DIGITAL = 'DIGITAL',
  MEMBERSHIP = 'MEMBERSHIP'
}

export default class Product {
  constructor(public name: string, public type: ProductType, public price: number) { }
}