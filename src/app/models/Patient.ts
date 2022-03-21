export class Patient {
    _id: string;
    firstName: string;
    lastName: string;
    documentNumber: string;
    birthdate: string;
    gender: string;
    department: string;
    province: string;
    district: string;
    address: string;

    constructor() {
        this._id = '';
        this.firstName = '';
        this.lastName = '';
        this.documentNumber = '';
        this.birthdate = '';
        this.gender = '';
        this.department = '';
        this.province = '';
        this.district = '';
        this.address = '';
    }
}