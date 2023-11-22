export class Turno {
    private turno_fecha: Date;
    private turno_estado: number;
    private animal_id: number;
    private refugio_id: number;

    constructor(turno_fecha: Date,turno_estado: number,animal_id: number,refugio_id: number){
        this.turno_fecha = turno_fecha;
        this.turno_estado = turno_estado;
        this.animal_id = animal_id;
        this.refugio_id = refugio_id;
    }
}