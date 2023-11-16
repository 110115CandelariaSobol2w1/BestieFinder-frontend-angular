export class Publicacion {
    public animal_name:string;
    public animal_raza:string;
    public animal_edad:number;
    public animal_color:string;
    public animal_sexo: string;
    public animal_descripcion:string;
    public animal_photo: string;
    public animal_personalidad:string;
    public animal_patio:string;
    public animal_estado:number;
    public animal_tipo:number;
    public publicacion_descripcion:string;
    public publicacion_ubicacion:string;
    public publicacion_fecha:Date;
    public publicacion_photo:string

    constructor(animal_name:string,
         animal_raza:string,
         animal_edad:number,
         animal_color:string,
         animal_sexo: string,
         animal_descripcion:string,
         animal_photo: string,
         animal_personalidad:string,
         animal_patio:string,
         animal_estado:number,
         animal_tipo:number,
         publicacion_descripcion:string,
         publicacion_ubicacion:string,
         publicacion_fecha:Date,
         publicacion_photo:string){

            this.animal_name = animal_name;
            this.animal_raza = animal_raza;
            this.animal_edad = animal_edad;
            this.animal_color = animal_color;
            this.animal_sexo = animal_sexo;
            this.animal_descripcion = animal_descripcion;
            this.animal_photo = animal_photo;
            this.animal_personalidad = animal_personalidad;
            this.animal_patio = animal_patio;
            this.animal_estado = animal_estado;
            this.animal_tipo = animal_tipo;
            this.publicacion_descripcion = publicacion_descripcion;
            this.publicacion_ubicacion = publicacion_ubicacion;
            this.publicacion_fecha = publicacion_fecha;
            this.publicacion_photo = publicacion_photo
        }
}