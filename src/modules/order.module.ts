interface IOrder {
orderid: number;
datecreated: Date;
dateshipped: Date;
customername:string;
customerid: number;
status: string;
shippingid: number;
placeOrder: ()=> void;
}

export class Order implements IOrder {
orderid: number;
datecreated: Date;
dateshipped: Date;
customername:string;
customerid: number;
status: string;
shippingid: number;

constructor(
orderid: number,
datecreated: Date,
dateshipped: Date,
customername:string,
customerid: number,
status: string,
shippingid: number,) {
    (this.orderid = orderid),
      (this.datecreated = datecreated),
      (this.dateshipped = dateshipped),
      (this.customername = customername),
      (this.customerid = customerid),
      (this.status = status),
      (this.shippingid = shippingid);
  }
  placeOrder(): void {
    // Is the process in which a customer submits bought products to the admin for verification and payment.
    return
  }
}
