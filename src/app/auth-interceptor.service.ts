import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from 'rxjs';


export class AuthInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedRequest = req.clone({headers: req.headers.append('modifiedHeader', 'val1')});
        console.log('Intercepted request');
        return next.handle(modifiedRequest);
    }

}
