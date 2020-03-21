export enum statusBedRequest {
    TODO,
    ACCEPTED,
    REFUSED,
    CANCELLED,
}

export interface BedRequestCreateDTO {
    siteId: number;
}

export interface BedRequestUpdateDTO {
    status: statusBedRequest;
}

export class BedRequest {
    id: number;
    siteId: number;
    status: statusBedRequest;
    createdAt: Date;
    constructor(bedRequest: BedRequest) {
        if (bedRequest) {
            this.id = bedRequest.id;
            this.siteId = bedRequest.siteId;
            this.status = bedRequest.status;
            this.createdAt = new Date(bedRequest.createdAt);
        }
    }
}
