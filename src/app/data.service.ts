import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Injectable } from '@angular/core';

// global header creation for the overload
const options={
  headers:new HttpHeaders()
}



@Injectable({
  providedIn: 'root'
})




export class DataService {

  constructor(private http:HttpClient) {}
 
      // token 
      getToken(){
        //header class
        const headers= new HttpHeaders()
        const token=JSON.parse(localStorage.getItem('token')||"")
        //checking the token existence in local storage
        if(token){
          
          options.headers=headers.append('access_token',token)
          
        }
        return options
      
      }

      // register api

      registerApi(phone:any,uname:any,psw:any){
       const body={
        phone:phone,
        uname:uname,
        psw:psw

        }
        return this.http.post('http://localhost:3000/register',body)
      }

      // login Api
      loginApi(phone:any,psw:any){
        const body={
          phone:phone,
          psw:psw
        }
        return this.http.post('http://localhost:3000/login',body)
      }

      // view all  product menu api
      
      

      // view single product and order api


}
