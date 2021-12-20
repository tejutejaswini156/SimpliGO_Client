import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseURL="http://localhost:5000"
  constructor(private http:HttpClient) { }
//   createUser(user:any){
//     return this.http.post("http://localhost:3000/users", user);
//  }
//  getAllUser(){
//    return this.http.get("http://localhost:3000/users")
//  }
 insertEmployee(userObj:any):Observable<any>{
  var URL=this.baseURL+"/user";
  let header={'content-type':'application/json'};
  return this.http.post(URL,userObj,{'headers':header,responseType:'text'});
}
getAll():Observable<any>{
var url=this.baseURL+"/user/getAll";
return this.http.get(url);
}
findLogin():Observable<any>{
  var url=this.baseURL+"/user/getAll";return this.http.get(url);
}
}
