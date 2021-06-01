import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth-services.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  collapse: boolean = true;
  collapsed = true;
  logged:boolean=false;
  constructor(config: NgbCarouselConfig,private route:Router,private authServices:AuthService) { 
    config.interval = 3000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.wrap = true
    this.authServices.loginstatus.subscribe(data=>{
      this.logged=data
    })
   }
  ngOnInit(): void {
  }
  toSignup()
  {
    this.route.navigate(['/signup'])
  }
  toSignin()
  {
    this.route.navigate(['/signin'])
  }
}
