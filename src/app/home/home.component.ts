import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(public router:Router){}
 ngOnInit(): void {
   
  if(!sessionStorage.getItem('sid')) {         //use ! later to authenticate user
    this.router.navigate(['login']);
  }
   
 }

 logoutprocess() {
   this.router.navigate(['login']);
 }

}