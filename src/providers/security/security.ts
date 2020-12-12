import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{ENV}from'../../app/env'
import{Http,Headers,RequestOptions}from'@angular/http'
import{Observable}from'rxjs/rx'
/*
  Generated class for the SecurityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SecurityProvider {

  constructor(public http: Http) {
    console.log('Hello SecurityProvider Provider');
  }
  login(email,password)
  {
    let  headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
   
    let requestOptions=new RequestOptions({headers:headers})
    let param={
      "email":email,
      "password":password,
     "apitype":"appUserLogin"
     }
   return this.http.post(ENV.mainApi+'/adminApi.php',param)
   .map((data)=>{
     
     return data.json()
   })

  }
  getDateData(date)
  {
    let  headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
   
    let requestOptions=new RequestOptions({headers:headers})
    let param={
      "apitype":"getAllAppointmentData",
      "dateApp":date
     }
   return this.http.post(ENV.mainApi+'/adminApi.php',param)
   .map((data)=>{
     
     return data.json()
   })

  }

}
