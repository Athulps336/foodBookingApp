import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  user1:any
  
  constructor(private ds:DataService, private route:Router){}

  

  ngOnInit(): void {
    if(!localStorage.getItem("currentPhone")){
      this.route.navigateByUrl("")
      alert("Please Login First")
    }
    this.user1=localStorage.getItem("currentUser")
  }

  // logout
  logout(){
    localStorage.removeItem("currentPhone")
    localStorage.removeItem("currentUser")
    localStorage.removeItem("token")
    this.route.navigateByUrl("")
  }

}
