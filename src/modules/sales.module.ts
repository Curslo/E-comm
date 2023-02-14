interface ISales {
  saleid: number;
  saledate: Date;
  productname: string;
  productid: number;
  productquantity: number;
  customername: string;
  customerid: number;
  productcost: number;
  producttax: number;
  ordedrid: number;
  customerAmount: number;
  culculateTotalCost: () => number;
  culculateBalance: () => number;
  updateDailySale: () => void;
  viewDailySale: () => void;
  deleteSale: () => void;
  createNewSale: () => void;
}

export class Sales implements ISales {
  saleid: number;
  saledate: Date;
  productname: string;
  productid: number;
  productquantity: number;
  customername: string;
  customerid: number;
  productcost: number;
  producttax: number;
  ordedrid: number;
  customerAmount: number;

  constructor(
    saleid: number,
    saledate: Date,
    productname: string,
    productid: number,
    productquantity: number,
    customername: string,
    customerid: number,
    productcost: number,
    producttax: number,
    ordedrid: number,
    customerAmount: number
  ) {
    (this.saleid = saleid),
      (this.saledate = saledate),
      (this.productname = productname),
      (this.productid = productid),
      (this.customername = customername),
      (this.productquantity = productquantity),
      (this.customerid = customerid),
      (this.producttax = producttax),
      (this.productcost = productcost),
      (this.ordedrid = ordedrid),
      (this.customerAmount = customerAmount)
  }
  culculateTotalCost(): number {
    //Culculate the total cost
    const totalCost = (this.productquantity * this.productcost) + this.producttax;
    return totalCost;
  }
  culculateBalance(): number {
    return this.customerAmount - this.culculateTotalCost()
  }
  updateDailySale(): void {
    // Save the sale made, amount/totalcost, and sales information
    return;
  }
  viewDailySale(): void {
    // View saved daily sales
    return;
  }
  deleteSale(): void {
    // Remove sales
    return;
  }
  createNewSale(): void {
    // Create new sale
    return;
  }
}
