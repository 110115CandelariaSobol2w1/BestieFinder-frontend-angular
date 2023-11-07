export class Login {
    private email: string;
    private password: string;

    constructor(username:string, password:string){
        this.email = username;
        this.password = password;
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
}