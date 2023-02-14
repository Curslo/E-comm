interface IRegion {
regionid: number;
regionname: string;
regionshippincost: number;
updateRegion: () => void;
}

export class Region implements IRegion {
regionid: number;
regionname: string;
regionshippincost: number;

constructor (
regionid: number,
regionname: string,
regionshippincost: number,
) {
    (this.regionid = regionid),
    (this.regionname = regionname),
    (this.regionshippincost = regionshippincost)
}
updateRegion(): void {
    // Add region, remove region
    
}
}