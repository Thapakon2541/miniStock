import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-registor',
  templateUrl: './login-registor.component.html',
  styleUrls: ['./login-registor.component.scss']
})
export class LoginRegistorComponent implements OnInit {
 
  userData = {
    userName: '',
    password:''

  }
  constructor(public  router: Router) { }

  ngOnInit(): void {
  }
  checkLogin(){
    if(this.userData.userName == 'admin' && this.userData.password == '1234'){
      this.router.navigate(['dashboard']);
    }else{
      alert('Username invalid')
    }
   
  }
}
