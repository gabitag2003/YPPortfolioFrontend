import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class AuthService {
     URL = environment.URL + 'auth/';
    authURL= 'http://localhost:8080/auth/';

    constructor(private httpClient: HttpClient) {}
    public nuevo (nuevoUsuario : NuevoUsuario): Observable<any>{
        return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);

    }   

    public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario)
        
    }
    
}