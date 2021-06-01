import { Component, OnInit } from '@angular/core';
import { profile } from '../data/profile.model';
import { AuthService } from '../services/auth-services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile:profile;
  loader:boolean=true
  test:string="hai"
  constructor(private authservice:AuthService) {}
  ngOnInit(){
    setTimeout(()=>this.loader=false,2000)
    this.userProfile=this.authservice.userProfile
  }
}
