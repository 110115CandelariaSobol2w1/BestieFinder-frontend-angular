export class Login {
    private email: string;
    private password: string;
    private _token: string;

    constructor(username:string, password:string){
        this.email = username;
        this.password = password;
        this._token = '';
    }

    get getUsername(): string {
        return this.email;
    }

    set setUsername(username: string){
        this.email=username;
    }

    get getPassword(): string {
        return this.password
    }

    set setPassword(password:string){
        this.password = password
    }

    get token(): string {
        return this._token;
    }

    // Setter para actualizar el valor del token
    set token(token: string) {
        this._token = token;
    }
}