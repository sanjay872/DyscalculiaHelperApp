import { HttpClient} from '@angular/common/http';
import { EventEmitter, Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject} from 'rxjs';
import { User } from '../data/auth.model';
import { profile } from '../data/profile.model';
import { signin } from '../data/signin.model';
import { signup } from '../data/signup.model';
import { screenTestServices } from './screen-test-services.service';

@Injectable({
  providedIn:"root"
})
export class AuthService {
  user=new  BehaviorSubject<User>(null);
  level:string="easy";
  userProfile:profile;
  userid:string=null
  token:string=null;
  loginstatus=new EventEmitter<boolean>(false);
  signupstatus=new EventEmitter<boolean>(false);
  userlogged=new EventEmitter<boolean>(false);
  constructor(private http:HttpClient,private route:Router,private screenTestServices:screenTestServices) { }
  
  signup(data:signup)
  {
    this.http.post("http://localhost:8080/users",data).subscribe(
                                  ()=>
                                  {
                                    this.signupstatus.emit(true)
                                    console.log("registered")
                                  },
                                  (error)=>
                                  {
                                    this.signupstatus.emit(false)
                                    console.log(error)
                                  });
  }
  signin(data:signin)
  {
    this.http.post<profile>("http://localhost:8080/users/login",data,{observe:'response'}).subscribe(
      data => {
        const user=new User(
                            data.headers.get("USERID"),
                            data.headers.get("Authorization"));
        const userProfile=new profile(
                                      data.body.firstName,
                                      data.body.lastName,
                                      data.body.age,
                                      data.body.email);
        this.userProfile=userProfile;
        this.userid=data.headers.get("USERID");
        this.token=data.headers.get("Authorization")
        this.screenTestServices.token=data.headers.get("Authorization")
        this.screenTestServices.userId=data.headers.get("USERID")
        this.user.next(user)
        this.userlogged.emit(true)
        this.loginstatus.emit(true)
        this.route.navigate(['/profile']);
      },error => {
        this.loginstatus.emit(false) 
        console.log(error);
        }
    );
  }
  logout()
  {
    this.user.next(null);
    this.userProfile=null;
    this.userlogged.emit(false)
    this.route.navigate(['/'])
  }
}
