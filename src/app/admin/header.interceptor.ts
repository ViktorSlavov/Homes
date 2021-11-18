import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {
        
    }

    public intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("HEADER INTERCEPTOR");
        if (httpRequest.url.indexOf('auth') <= 0) {
            const API_KEY = this.authService.authToken;
            console.log(API_KEY);
            return next.handle(httpRequest.clone({ setHeaders: { "west-village-auth": API_KEY } }));
        }
        return next.handle(httpRequest);
        
    }
}