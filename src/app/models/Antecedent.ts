export class Antecedent {
    _id: string;
    type: string;
    examinationDate?: string;
    detail: string;
    patient: string;

    constructor() {
        this._id = '';
        this.type = '';
        this.detail = '';
        this.patient = '';
    }
}