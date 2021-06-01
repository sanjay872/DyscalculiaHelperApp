import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Qns } from "../data/Qns.model";

@Injectable({
    providedIn: 'root'
  })
export class Adminservices
{
    constructor(private http:HttpClient,private route:Router) { }
    createAddQns(qns:Qns)
  {
    this.http.post<Qns>("http://localhost:8080/admin/add/create",qns).subscribe(
      (data)=>{},
      (error)=>{
        console.log(error)
      }
    )
  }
  createSubQns(qns:Qns)
  {
    this.http.post<Qns>("http://localhost:8080/admin/sub/create",qns).subscribe(
      (data)=>{},
      (error)=>{
        console.log(error)
      }
    )
  }
  createMulQns(qns:Qns)
  {
    this.http.post<Qns>("http://localhost:8080/admin/mul/create",qns).subscribe(
      (data)=>{},
      (error)=>{
        console.log(error)
      }
    )
  }
  createMixQns(qns:Qns)
  {
    this.http.post<Qns>("http://localhost:8080/admin/mix/create",qns).subscribe(
      (data)=>{},
      (error)=>{
        console.log(error)
      }
    )
  }
  
}