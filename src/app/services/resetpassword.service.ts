import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Otp } from '../../otp';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {

  constructor() { }
}

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordService {
  constructor(private http: HttpClient) {}

  sendmail = 'http://localhost:5000/reset/sendmail';
  verify = 'http://localhost:5000/reset/verify';

  sendOtp(email: string): Observable<Otp> {
    return this.http.post<Otp>(this.sendmail, email);
    console.log('this.sendmail');
  }

  resetPassword(otp: Otp): Observable<Otp> {
    return this.http.post<Otp>(this.verify, otp);
  }
}