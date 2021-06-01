import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Graph } from 'src/app/data/graph.model';
import { AuthService } from 'src/app/services/auth-services.service';
import { FlaskRequestService } from 'src/app/services/flask-request.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  showgraph:boolean=false;
  constructor(private flaskRequest:FlaskRequestService,private authService:AuthService,private sanitizer: DomSanitizer) { }
  req:Graph={userid:'',section:''};
  imageGraph;
  imageToShow;
  image;
  ngOnInit(): void {}
  public getSantizeUrl() {
    return this.sanitizer.bypassSecurityTrustUrl(this.imageToShow);
  }
  showGraph(section:string)
  {
    this.req.userid=this.authService.userid;
    this.req.section=section
    this.flaskRequest.getGraph(this.req).subscribe(
        (res)=>
        {
          if(res==null){
            console.log("no image")
          }else{
            let reader = new FileReader();
        reader.addEventListener("load", () => {
           this.imageToShow =reader.result;
           this.showgraph=true;
        }, false);
        if (res) {
           reader.readAsDataURL(res);
        }
          }
        },
        (error)=>
        {
          console.log(error)
          this.showgraph=false;
        }
      )
  }
}
