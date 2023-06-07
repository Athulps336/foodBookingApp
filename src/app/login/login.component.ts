import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  phone:any;
  psw:any;

  constructor(private route:Router, private fb:FormBuilder, private ds:DataService){}
  // form validation
  loginForm= this.fb.group({
    phone:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
    psw:['',[Validators.required,Validators.pattern('[a-zA-z0-9]+')]]
  })

  ngOnInit(): void {}

  //  login function 
  login(){
    if(this,this.loginForm.valid){
      this.ds.loginApi(this.loginForm.value.phone,this.loginForm.value.psw).subscribe((result:any)=>{
        alert(result.message)
        this.route.navigateByUrl('home');
        // store this value to local storage
        localStorage.setItem("currentPhone",result.currentPhone)
        localStorage.setItem("currentUser",result.currentUser)
        // to store token
        localStorage.setItem("token",JSON.stringify(result.token))
      },
      result=>{
        alert(result.error.message)
      }
      )
    }
    else{
      alert("Invalid Form")
    }

  }

}



