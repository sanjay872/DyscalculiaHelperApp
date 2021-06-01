import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-services.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  passwordpattern="[a-zA-Z0-9#$^+=!*()@%&]{4,}";
  emailpattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*";
  loginstatus:boolean=true;
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
    this.authservice.loginstatus.subscribe(
      data=>{
        this.loginstatus=data
      }
    )
  }
  onSubmit(form)
  {
    this.authservice.signin(form.value)
  }
  }
