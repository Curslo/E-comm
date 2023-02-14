import exp from "constants";

interface IGas {
  productname: string;
  productid: number;
  updateGasProducts: () => void;
}

export class Gas implements IGas {
  productname: string;
  productid: number;

  constructor(productname: string, productid: number) {
    (this.productid = productid), (this.productname = productname);
  }
  updateGasProducts(): void {
    // This is the process of adding, or removing gas products from the inventory.
    // Adding a product we need a form.
    // Removing a product we need queries since products are either removed by making a sale or expired products. 
  }
}
