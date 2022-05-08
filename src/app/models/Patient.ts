export class Patient {
    id: number;
    firstName: string;
    lastName: string;
    documentNumber: string;
    birthdate: string;
    gender: string;
    address: string;
    ubigeoId: string;

    constructor() {
        this.id = 0;
        this.firstName = '';
        this.lastName = '';
        this.documentNumber = '';
        this.birthdate = '';
        this.gender = '';
        this.address = '';
        this.ubigeoId = '';
    }
}