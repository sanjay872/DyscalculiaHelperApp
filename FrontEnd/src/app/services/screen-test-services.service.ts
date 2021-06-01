import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Qns } from "../data/Qns.model";
import { testResults } from "../data/testResults.model";

@Injectable({
    providedIn:"root"
})
export class screenTestServices
{
  token:string;
  userId:string;
  teststarted=new EventEmitter<boolean>(false);
  qns:Qns[]=[];
  level:string;
  section:string;
  constructor(private http:HttpClient){}

  getAddQuestions()
  { 
    return this.http.get<Qns[]>("http://localhost:8080/add/"+this.level,{headers:new HttpHeaders({'Authorization':this.token})})
  }

  getSubQuestions()
  {
    return this.http.get<Qns[]>("http://localhost:8080/sub/"+this.level,{headers:new HttpHeaders({'Authorization':this.token})})
  }

  getMulQuestions()
  {
    return this.http.get<Qns[]>("http://localhost:8080/mul/"+this.level,{headers:new HttpHeaders({'Authorization':this.token})})
  }

  getMixQuestions()
  {
    return this.http.get<Qns[]>("http://localhost:8080/mix/"+this.level,{headers:new HttpHeaders({'Authorization':this.token})})
  }

  updateResults(score:number,time:number)
  {
    const res=new testResults(this.userId,this.section,this.level,score,time);
    console.log(res)
    this.http.post("http://localhost:8080/updateResults/",res,{headers:new HttpHeaders({'Authorization':this.token})}).subscribe(
      ()=>{},
      (error)=>console.log(error)
    )
  }
}