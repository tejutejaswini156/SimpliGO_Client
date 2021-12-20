import { Injectable } from '@angular/core';
import { CanActivate,Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { RouterModule, Routes } from '@angular/router';
@Injectable({
  providedIn: 'root'
})


export class AuthGuardService  implements CanActivate{

  constructor(private router:Router) { }
  canActivate(){
    let bReturn=true;
    if(localStorage.getItem('isLoggedIn')=='false')
    {
      alert("Sorry you are not allowed to view this page. Please LOGIN !!");
      this.router.navigate(['/login']);
      bReturn=false;
    }

return bReturn;
  }
}