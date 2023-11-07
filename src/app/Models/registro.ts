export class Registro {
  private nombre: string;
  private apellido: string;
  private email: string;
  private password: string;

  constructor(nombre:string,apellido:string,email:string,password:string){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.password = password;
  }

  get getNombre(): string {
    return this.nombre;
  }

  set setNombre(nombre:string){
    this.nombre=nombre;
  }

  get getApellido(): string {
    return this.apellido;
  }

  set setApellido(apellido:string){
    this.apellido=apellido;
  }

  get getemail(): string {
    return this.email;
  }

  set setEmail(email:string){
    this.email=email;
  }

  get getPassword(): string {
    return this.password;
  }

  set setPassword(password:string){
    this.password=password;
  }

}
