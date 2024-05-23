import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userDate=new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient ,private _Router:Router) {
    if(localStorage.getItem('userToken')!==null){
    this.decodeuser()}
   }

  Register(userDate:object):Observable<any>{ 
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userDate);
  }
  login(userDate:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userDate)
  }
  decodeuser(){
  let decode=JSON.stringify(  localStorage.getItem('userToken'));
  let decousee:any=jwtDecode(decode);
  this.userDate.next(decousee);
  }
  logout(){
    localStorage.removeItem('userToken');
    this.userDate.next(null);
    this._Router.navigate(['login']);
  }
}
