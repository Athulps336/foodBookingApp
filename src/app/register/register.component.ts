import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor (private fb:FormBuilder, private ds:DataService, private route:Router){}
     
  registerForm= this.fb.group({
    phone:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-z]+')]],
    psw:['',[Validators.required,Validators.pattern('[a-zA-z0-9]+')]]

  })


  ngOnInit(): void {
  }

  // reg function

  register(){
    if(this.registerForm.valid){
      this.ds.registerApi(this.registerForm.value.phone,
        this.registerForm.value.uname,
        this.registerForm.value.psw).subscribe((result:any)=>{
          alert(result.message)
          this.route.navigateByUrl("")
          
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
