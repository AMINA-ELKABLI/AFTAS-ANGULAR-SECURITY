import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formLogin! : FormGroup;
  constructor(private fb : FormBuilder , private authService : AuthService , private router  : Router
  ) {
  }
  ngOnInit(): void {
    this.formLogin= this.fb.group({
      email: this.fb.control(""),
      password: this.fb.control("")

    })
  };

  handleLogin() {

    let email = this.formLogin.value.email;
    let pwd = this.formLogin.value.password;

   this.authService.login(email, pwd).subscribe(() => {
     this.router.navigate(['admin/dashboard']).then(res=>{
       console.log("redirect: " + res);
     }).catch(e => {
       console.error(e);
     })
   });
  }
}
