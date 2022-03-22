export class Location {
    _id: string;
    department: string;
    province: string;
    district: string;
    address: string;

    constructor() {
        this._id = '';
        this.department = '';
        this.province = '';
        this.district = '';
        this.address = '';
    }
}