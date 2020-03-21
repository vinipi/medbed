import { UF } from './UF';

export class Site {
    id: number;
    name: string;
    ufs: UF[] = [];
    bedOtherUsed: number;
    bedOtherAvailable: number;
    bedCovidUsed: number;
    bedCovidAvailable: number;
    constructor(site?: Site) {
        if (site) {
            this.id = site.id;
            this.name = site.name;
            this.ufs = site.ufs;
            this.bedOtherUsed = site.bedOtherUsed;
            this.bedOtherAvailable = site.bedOtherAvailable;
            this.bedCovidUsed = site.bedCovidUsed;
            this.bedCovidAvailable = site.bedCovidAvailable;
        }
    }
}
