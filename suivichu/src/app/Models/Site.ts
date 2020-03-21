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
            this.bedOtherUsed = site.bedOtherUsed;
            this.bedOtherAvailable = site.bedOtherAvailable;
            this.bedCovidUsed = site.bedCovidUsed;
            this.bedCovidAvailable = site.bedCovidAvailable;
            this.ufs = site.ufs;
        }
    }
}
/*
response of api/site
"{"siteId":1,
"siteName":"CHU Demo",
"siteBedOtherUsed":"10",
"siteBedOtherAvailable":"90",
"siteBedCovidUsed":"22",
"siteBedCovidAvailable":"28",
"ufs":[
    {
        "id":1,
        "name":"UF démo 1",
        "bedOtherTotal":100,
        "bedOtherUsed":10,
        "bedOtherAvailable":90,
        "bedCovidTotal":50,
        "bedCovidUsed":22,
        "bedCovidAvailable":28}
        ,{"id":2,"name":"UF démo 2","bedOtherTotal":0,"bedOtherUsed":0,"bedOtherAvailable":0,"bedCovidTotal":0,"bedCovidUsed":0,"bedCovidAvailable":0}]}"
*/