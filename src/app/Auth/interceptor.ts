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
  
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      const userDataString = sessionStorage.getItem('currentUser');
      const userData = userDataString ? JSON.parse(userDataString) : null;
      const token = userData && userData.token;
  
      if (token) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      console.log('INTERCEPTOR: ' + token);
      return next.handle(req);
    }
  }
  
  
  
