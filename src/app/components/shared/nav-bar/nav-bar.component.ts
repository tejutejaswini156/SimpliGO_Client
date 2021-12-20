import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AppService } from 'src/app/services/app.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AuthGuardService } from 'src/app/services/authguard.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  title = 'routingassignment';
  temp : any =null;
  del  : any =null;
  name  : any =null;
  
  constructor(private authenticationService:AuthenticationService,public authGuardService:AuthGuardService,private cookieServie:CookieService, private appService: AppService){
    
  }

 ngOnInit(){
   this.temp=this.cookieServie.get("uname");
   this.name="Welcome "+this.temp;
 }

 logout()
  {
   console.log("Before Logout"+this.cookieServie.get("uname"));
   this.cookieServie.delete("uname");
   console.log("After Logout"+this.cookieServie.get("uname"));
   this.ngOnInit();
  }

  logInForAuthGuard()
  {
    this.authenticationService.login();
    var x=localStorage.getItem('uname');
   // console.log(localStorage.getItem('uname'));
    
  }
  logOutForAuthGuard()
  {
    this.authenticationService.logout();
  }

}
