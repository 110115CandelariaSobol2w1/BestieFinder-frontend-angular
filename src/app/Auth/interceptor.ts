import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}
  

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const currentUser = this.authService.usuarioAutenticado;
      if (currentUser && currentUser) {
      req = req.clone({
      setHeaders: {
      Authorization: `Bearer ${currentUser}`
      }
      });
      }
      console.log("INTERCEPTOR: " + currentUser);
      return next.handle(req);
      }
      

    

    
      
  }
  
  
  
