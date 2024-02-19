import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

import {RegisterService} from "../services/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{
  formRegister! : FormGroup;
  constructor(private fb : FormBuilder , private  registerService  : RegisterService) {
  }
  ngOnInit(): void {
    this.formRegister= this.fb.group({
      firstName: this.fb.control(""),
      lastName: this.fb.control(""),
      email: this.fb.control(""),
      password: this.fb.control("")

    })
  }

  handleRegister() {
    let lastname = this.formRegister.value.lastName;
    let firstname = this.formRegister.value.firstName;
    let email = this.formRegister.value.email;
    let pwd = this.formRegister.value.password;

    this.registerService.register(lastname,firstname, email, pwd).subscribe({

    })
  }

}
