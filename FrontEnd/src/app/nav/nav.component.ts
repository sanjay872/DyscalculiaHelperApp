import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth-services.service';
import { screenTestServices } from '../services/screen-test-services.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  collapse: boolean = true;
  collapsed = true;

  constructor(config: NgbCarouselConfig,private route:Router,private authservice:AuthService,private screeenServices:screenTestServices) { 
    config.interval = 3000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.wrap = true
   }
  userlogged:boolean=false;
  testStarted:boolean=false;
  ngOnInit(): void {
    this.authservice.userlogged.subscribe(val=>{
      this.userlogged=val
    })
    this.screeenServices.teststarted.subscribe(val=>{
      this.testStarted=val
    })
  }
  logout()
  {
    this.authservice.logout();
  }
}
