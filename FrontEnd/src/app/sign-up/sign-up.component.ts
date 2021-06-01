import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-services.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  errorstatus:boolean=false;
  registered:boolean=false;
  namepattern="[a-zA-Z]{1,}";
  emailpattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*";
  passwordpattern="[a-zA-Z0-9#$^+=!*()@%&]{7,}";
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(form)
  {
    this.authservice.signup(form.value);
      if(this.errorstatus==false)
      {
        this.authservice.signupstatus.subscribe(data=>
          {
            this.registered=data
            this.errorstatus=!data;
          });
        form.reset()
      }
  }
}
