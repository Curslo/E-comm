interface ISolid {
productname: string;
productid: number;
updateSolidProducs: () => void
}

export class Solid implements ISolid {
productname: string;
productid: number;

constructor (
productname: string,
productid: number,
) {
    (this.productname = productname),
    (this.productid = productid)
}
updateSolidProducs(): void {
    // This is the process of adding, or removing solid products from the inventory.
    // Adding a product we need a form.
    // Removing a product we need queries since products are either removed by making a sale or expired products. 
}
}