export class Refugio {
    private refugio_nombre:string;
    private refugio_pais: string;
    private refugio_provincia:string;
    private refugio_ciudad:string;
    private refugio_telefono:string;
    private refugio_descripcion:string;
    private refugio_castraciones:boolean;

    constructor(refugio_nombre:string,refugio_pais:string,refugio_provincia:string, refugio_ciudad:string,refugio_telefono:string,refugio_descripcion:string, refugio_castraciones:boolean){
        this.refugio_nombre = refugio_nombre;
        this.refugio_pais = refugio_pais;
        this.refugio_provincia = refugio_provincia;
        this.refugio_ciudad = refugio_ciudad;
        this.refugio_telefono = refugio_telefono;
        this.refugio_descripcion = refugio_descripcion;
        this.refugio_castraciones = refugio_castraciones
    }

    get getNombre(): string {
        return this.refugio_nombre;
    }

    set setNombre(refugio_nombre: string){
        this.refugio_nombre=refugio_nombre;
    }

    get getPais(): string {
        return this.refugio_pais;
    }

    set setPais(refugio_pais: string){
        this.refugio_pais=refugio_pais;
    }

    get getProvincia(): string {
        return this.refugio_provincia;
    }

    set setProvincia(refugio_provincia: string){
        this.refugio_provincia=refugio_provincia;
    }

    get getCiudad(): string {
        return this.refugio_ciudad;
    }

    set setCiudad(refugio_ciudad: string){
        this.refugio_ciudad=refugio_ciudad;
    }

    get getTelefono(): string {
        return this.refugio_telefono;
    }

    set setTelefono(refugio_telefono: string){
        this.refugio_telefono=refugio_telefono;
    }

    get getDescripcion(): string {
        return this.refugio_descripcion;
    }

    set setDescripcion(refugio_descripcion: string){
        this.refugio_descripcion=refugio_descripcion;
    }

    get getCastraciones(): boolean {
     return this.refugio_castraciones;
    }

    set setCastraciones(refugio_castraciones: boolean){
        this.refugio_castraciones=refugio_castraciones;
    }

}