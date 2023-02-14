interface IProduct {
  productname: string;
  productid: number;
  productexpdate: Date;
  productmanfdte: Date;
  productpackage: string;
  productquantity: string;
  productcost: number;
  producttax: number;
  productState: string;
  updateProducts: () => void;
  validityDays: () => void;
}

export class Product implements IProduct {
  productname: string;
  productid: number;
  productexpdate: Date;
  productmanfdte: Date;
  productpackage: string;
  productquantity: string;
  productcost: number;
  producttax: number;
  productState: string;

  constructor(
    productname: string,
    productid: number,
    productexpdate: Date,
    productmanfdte: Date,
    productpackage: string,
    productquantity: string,
    productcost: number,
    producttax: number,
    productState: string
  ) {
    (this.productname = productname),
      (this.productid = productid),
      (this.productexpdate = productexpdate),
      (this.productmanfdte = productmanfdte),
      (this.productpackage = productpackage),
      (this.productquantity = productquantity),
      (this.productcost = productcost),
      (this.producttax = producttax),
      (this.productState = productState);
  }
  updateProducts(): void {
    // Add products
    // Remove products
    return;
  }
  validityDays():  void {
    return this.productexpdate - this.productmanfdte;
  }
}
