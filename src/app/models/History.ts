export class History {
    _id: string;
    height: number;
    weight: number;
    pressure: number;
    temperature: number;
    anamnesis: string;
    patient: string;
    createdAt: string;

    constructor() {
        this._id = '';
        this.height = 0;
        this.weight = 0;
        this.pressure = 0;
        this.temperature = 0;
        this.anamnesis = '';
        this.patient = '';
        this.createdAt = '';
    }
}