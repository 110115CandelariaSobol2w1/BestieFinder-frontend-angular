export class Evento {
    public evento_nombre: string;
    public evento_descripcion: string;
    public evento_inicio: Date;
    public evento_fin: Date;
    public evento_ubicacion: string;
    public evento_ciudad: string;
    public evento_photo: string;
    public refugio_id: number;

    constructor(
        evento_nombre: string,
        evento_descripcion: string,
        evento_inicio: Date,
        evento_fin: Date,
        evento_ubicacion: string,
        evento_ciudad: string,
        evento_photo: string,
        refugio_id: number
    ){

        this.evento_nombre = evento_nombre;
        this.evento_descripcion = evento_descripcion;
        this.evento_inicio = evento_inicio;
        this.evento_fin = evento_fin;
        this.evento_ubicacion = evento_ubicacion;
        this.evento_ciudad = evento_ciudad;
        this.evento_photo = evento_photo;
        this.refugio_id = refugio_id;
    }
}