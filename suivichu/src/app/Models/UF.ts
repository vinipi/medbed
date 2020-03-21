export interface IUFUpdateDTO {
    bedOtherTotal: number;
    bedOtherUsed: number;
    bedCovidTotal: number;
    bedCovidUsed: number;
}


export interface IUFCreateDTO {
    bedOtherTotal: number;
    bedOtherUsed: number;
    bedCovidTotal: number;
    bedCovidUsed: number;
    name: string;
    siteId: number;
}

export class UF {
    id: number;
    name: string;
    siteId: number;
    bedTotal: number;
    bedAvailable: number;
    bedUserCovid: number;
    bedUsedNotCovid: number;
    constructor(uf?: UF) {
        if (uf) {
            this.id = uf.id;
            this.name = uf.name;
            this.siteId = uf.siteId;
            this.bedTotal = uf.bedTotal;
            this.bedAvailable = uf.bedAvailable;
            this.bedUserCovid = uf.bedUserCovid;
            this.bedUsedNotCovid = uf.bedUsedNotCovid;
        }
    }
}
