// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  // templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css']
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userModel = new User("", "")

  onSubmit(){
    console.log(this.userModel)
  }

}