interface ILiquid {
productname: string;
productid: number;
updateLiquidProducs: () => void;
}

export class Liquid implements ILiquid {
productname: string;
productid: number;

constructor (
productname: string,
productid: number,
) {
    (this.productid = productid),
    (this.productname = productname)
}
updateLiquidProducs(): void {
    // This is the process of adding, or removing liquid products from the inventory.
    // Adding a product we need a form.
    // Removing a product we need queries since products are either removed by making a sale or expired products. 
}
}