import { Injectable, OnInit,OnDestroy} from '@angular/core';
import {  HttpEvent,  HttpErrorResponse,   HttpInterceptor,    HttpHandler,     HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, Subscription } from 'rxjs';
import { tap} from 'rxjs/operators';
import { of} from "rxjs";
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { CreateJwt } from '../shared/actions/jwt-action';
import { Actions, ofActionDispatched } from '@ngxs/store';

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor, OnInit, OnDestroy {

jwtToken : String = "";
subscription : Subscription = null;

constructor( private router: Router, private store :Store, private actions$: Actions) { }
 
ngOnInit () {
  console.log ("ngOnInit");
  this.subscription = this.actions$.pipe(ofActionDispatched(CreateJwt)).subscribe(({ payload }) => { this.jwtToken = payload.token;console.log ("jwtToken modifié : " + this.jwtToken);} );
}

ngOnDestroy () {
  console.log ("ngOnDestroy");
  if (this.subscription != null)
  {
    this.subscription.unsubscribe ();
  }
}

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
  
  if (this.jwtToken != "") {
    req = req.clone({ setHeaders: { Authorization: `Bearer ${this.jwtToken}` }});
  }
 
  return next.handle(req).pipe(tap(
      (evt : HttpEvent<any>)  => {
        if (evt instanceof HttpResponse) {
          let tab :  Array<String> ;                                                                                                                                                                                                                                                                                                                                
          let enteteAuthorization =  evt.headers.get("Authorization");
          if (enteteAuthorization != null ) {
            tab = enteteAuthorization.split(/Bearer\s+(.*)$/i);
            if (tab.length  > 1) {
              this.jwtToken = tab [1];
              this.store.dispatch(new CreateJwt({"token":this.jwtToken}));
            }
            console.log ("Bearer : " + this.jwtToken);
          }
      }  
    }, 
    (error: HttpErrorResponse) => {
        switch (error.status) {
          case 401:
            this.store.dispatch(new CreateJwt({"token":""}));
            console.log(`Erreur 401`);
            this.router.navigate(['/']);
            break;
      }
      return of(null);
    }
    ));  
  }
}



