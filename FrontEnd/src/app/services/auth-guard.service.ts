import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {AuthService } from './auth-services.service';
@Injectable({providedIn:'root'})
export class authguard implements CanActivate{
  constructor(private authservice:AuthService){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
      let status=true;
      this.authservice.user.subscribe(
            (data)=>{
              if(data==null)
              {
                status=false;
              } 
            }
      );
      return status
    }
}