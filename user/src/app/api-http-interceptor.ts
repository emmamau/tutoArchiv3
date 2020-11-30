import { Injectable} from '@angular/core';
import {  HttpEvent,  HttpErrorResponse,   HttpInterceptor,    HttpHandler,     HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, } from 'rxjs';
import { tap} from 'rxjs/operators';
import { of} from "rxjs";
import { Router } from '@angular/router';

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {

constructor( private router: Router) {  }

OAUTH_TOKEN : String = "";

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clone = req.clone({ setHeaders: { Authorization: `Bearer ${this.OAUTH_TOKEN}` }});
    return next.handle(clone).pipe(tap(
      (evt : HttpEvent<any>)  => {
        if (evt instanceof HttpResponse) {
          let tab :  Array<String> ;                                                                                                                                                                                                                                                                                                                                
          let enteteAuthorization =  evt.headers.get("Authorization");
          if (enteteAuthorization != null ) {
            tab = enteteAuthorization.split(/Bearer\s+(.*)$/i);
            if (tab.length  > 1) {
              this.OAUTH_TOKEN = tab [1];
            }
            console.log ("Bearer : " + this.OAUTH_TOKEN);
          }
      }  
    }, 
    (error: HttpErrorResponse) => {
        switch (error.status) {
          case 401:
            this.OAUTH_TOKEN = "";
            console.log(`Erreur 401`);
            this.router.navigate(['/']);
            break;
      }
      return of(null);
    }
    ));  
  }
}



