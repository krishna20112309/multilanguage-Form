import { Component, OnInit } from '@angular/core';
import { userdata } from 'src/app/model/userdata';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  usermodel: userdata = {
    username: '',
    useremail: '',
    userpassword: '',
    usercontry: '',
    userdesignation: '',
    usermobile: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

  onformlogin() {
    console.log(this.usermodel);
  }

}
