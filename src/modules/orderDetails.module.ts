interface IDetails {
  orderid: number;
  productid: number;
  productname: string;
  quantity: number;
  unitcost: number;
  subtotal: number;
  calculatePrice: () => number;
}

export class Details implements IDetails {
  orderid: number;
  productid: number;
  productname: string;
  quantity: number;
  unitcost: number;
  subtotal: number;

  constructor (
orderid: number,
productid: number,
productname: string,
quantity: number,
unitcost: number,
subtotal: number,
  ) {
    (this.orderid = orderid),
    (this.productid = productid),
    (this.productname = productname),
    (this.quantity = quantity),
    (this.unitcost = unitcost),
    (this.subtotal = subtotal)
  }

  calculatePrice(): number {
    // This is the process of culculating the price of user items.

    return this.quantity * this.unitcost;
  }
}
