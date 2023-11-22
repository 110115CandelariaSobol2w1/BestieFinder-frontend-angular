export class TurnoDisponible {
    private refugio_id: number;
    private turno_fecha: Date;
    private animal_id: number;

    constructor(refugio_id:number,turno_fecha:Date,animal_id: number){
        this.refugio_id = refugio_id;
        this.turno_fecha = turno_fecha;
        this.animal_id = animal_id
    }
}