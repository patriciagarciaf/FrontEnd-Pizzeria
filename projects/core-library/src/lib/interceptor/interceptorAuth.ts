import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { DecoratorService } from "./decoratorservice";
import { IndexeddbService } from "../services/indexeddb.service";
import { UserDTO } from "../dto/userDTO";


@Injectable({ providedIn: 'root' })
export class HttpInterceptorAuth implements HttpInterceptor {    
    constructor(private indexeddbService: IndexeddbService){
    }
    private async setAuthorization(req: HttpRequest<any>): Promise<HttpRequest<any>>{
        const userDTO: UserDTO=await this.indexeddbService.getUser();
        return req.clone({setHeaders:{'Authorization': `${userDTO.type} ${userDTO.token}`}});
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const autorizationObserver = DecoratorService.getAuthorizationObserver();
        if (autorizationObserver.addToken) {
            const token: string|null = localStorage.getItem('token');
            if(token){
                const modified = req.clone({ setHeaders: { 'Authorization': `Bearer ${token}` }});
                autorizationObserver.addToken = false;
                return next.handle(modified);          
            }        
        }
        return next.handle(req);
    }
    private async reqPromise(req: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>>{
        let modified;
        modified=await this.setAuthorization(req);
        return next.handle(modified).toPromise();
    }
}