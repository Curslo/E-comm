interface IInfo {
  shippingid: number;
  shipingtype: string;
  shippingcost: number;
  regionid: number;
  regionname: string;
  updateShippingInfo: () => void;
  
}

export class Info implements IInfo {
shippingid: number;
shipingtype: string;
shippingcost: number;
regionid: number;
regionname: string;

constructor (
shippingid: number,
shipingtype: string,
shippingcost: number,
regionid: number,
regionname: string,
) {
    (this.shippingid = shippingid),
    (this.shipingtype = shipingtype),
    (this.shippingcost = shippingcost),
    (this.regionid = regionid),
    (this.regionname = regionname)
}
updateShippingInfo(): void {return void}
}
