import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { AuthenticationService } from '../../services/authentication.service';
import { AuthGuardService } from '../../services//authguard.service';
import { CookieService } from 'ngx-cookie-service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AlertifyService } from 'src/app/services/alertify.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private authenticationService: AuthenticationService, private authGuardService: AuthGuardService, private cookieService: CookieService,private alterify: AlertifyService) { }
  pinvalid: any;
  logInForAuthGuard() {
    this.authenticationService.login();
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  // Check if user is login
  login() {
    this.http.get<any>("http://localhost:5000/user/getAll").subscribe(res => {
      const user = res.find((a: any) => {
        return a.useremail === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      this.pinvalid = res.find((a: any) => {
        return a.useremail === this.loginForm.value.email && a.password !== this.loginForm.value.password
      });
      if (user) {
        console.log(user.username)
        this.cookieService.set("uname", user.username);
        this.loginForm.reset();
        alert("Hello " + this.cookieService.get("uname") + " your Login is Successfull");
        this.router.navigate(['/home']);
      } 
      else if (this.pinvalid) {
        alert("Password incorrect")
      }
      else {
        alert("User not found")
      }
    },err => {
      alert("Somthing went wrong")
    })
  }
}

