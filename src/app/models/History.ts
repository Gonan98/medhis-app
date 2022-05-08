export class History {
    id: number;
    height: number;
    weight: number;
    pressure: number;
    temperature: number;
    heartRate: number;
    respirationRate: number;
    anamnesis: string;
    examSummary?: string;
    patientId: number;
    createdAt: string;
    updatedAt: string;

    constructor() {
        this.id = 0;
        this.height = 0;
        this.weight = 0;
        this.pressure = 0;
        this.temperature = 0;
        this.heartRate = 0;
        this.respirationRate = 0;
        this.anamnesis = '';
        this.patientId = 0;
        this.createdAt = '';
        this.updatedAt = '';
    }
}