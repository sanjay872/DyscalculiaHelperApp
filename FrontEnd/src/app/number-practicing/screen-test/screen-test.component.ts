import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Qns } from 'src/app/data/Qns.model';
import { screenTestServices } from 'src/app/services/screen-test-services.service';

@Component({
  selector: 'app-screen-test',
  templateUrl: './screen-test.component.html',
  styleUrls: ['./screen-test.component.css']
})
export class ScreenTestComponent implements OnInit {

  qns:Qns[]=[]
  enableResult:boolean=false;
  time:{hr:number,min:number,sec:number}={hr:0,min:0,sec:0};
  section:string;
  level:string;
  pos:number=0;
  loaded=false
  handler;
  crt:number=0
  elem;
  res:number;
  teststatus:boolean=true
  constructor(private screentestservices:screenTestServices,private route:Router,
    @Inject(DOCUMENT) private document: any) { }
  ngOnInit(){ 
    this.elem = document.documentElement; 
    this.openFullscreen();
    if(this.screentestservices.section=="add")
    {
    this.loaded=false;
    this.screentestservices.getAddQuestions().subscribe(
      (data)=>{
        this.qns=data
        data.forEach(element =>
          { if(element.questionimg!=null)
              element.questionimg = "data:image/png;base64,".concat(element.questionimg)
          });
        this.loaded=true;
        this.startTimer();
        this.screentestservices.teststarted.emit(true);
      },
      (error)=>{
        console.log(error)
      }
  )
  }
  else if(this.screentestservices.section=="sub")
  {
    this.loaded=false;
    this.screentestservices.getSubQuestions().subscribe(
      (data)=>{
        this.qns=data
        data.forEach(element =>
          { if(element.questionimg!=null)
              element.questionimg = "data:image/png;base64,".concat(element.questionimg)
          });
          this.loaded=true;
          this.startTimer();
          this.screentestservices.teststarted.emit(true);
      },
      (error)=>{
        console.log(error)
      }
  )
  }
  else if(this.screentestservices.section=="mul")
  {
    this.loaded=false;
    this.screentestservices.getMulQuestions().subscribe(
      (data)=>{
        this.qns=data
        data.forEach(element =>
          { if(element.questionimg!=null)
              element.questionimg = "data:image/png;base64,".concat(element.questionimg)
          });
          this.loaded=true;
          this.startTimer();
          this.screentestservices.teststarted.emit(true);
      },
      (error)=>{
        console.log(error)
      }
  )
  }
  else if(this.screentestservices.section=="mix")
  {
    this.loaded=false;
    this.screentestservices.getMixQuestions().subscribe(
      (data)=>{
        this.qns=data
        data.forEach(element =>
          { if(element.questionimg!=null)
              element.questionimg = "data:image/png;base64,".concat(element.questionimg)
          });
          this.loaded=true;
          this.startTimer();
          this.screentestservices.teststarted.emit(true);
      },
      (error)=>{
        console.log(error)
      }
  )
  }
  }

  onSubmit(form)
  {
    if(form.value.option==this.qns[this.pos].solution)
      {
       this.res=1
       this.crt+=10;
      }
      else
      {
       this.res=0;
      }
      if(this.pos+1==this.qns.length)
      {
        this.teststatus=false
      }
      if(this.pos+1<this.qns.length)
      {
        this.pos+=1;
        form.reset();
      }
      this.enableResult=true;
  }
  exit()
  {
    this.endTimer();
    let sec=(this.time.hr*60*60)+(this.time.min*60)+this.time.sec;
    this.screentestservices.updateResults(this.crt,sec);
    this.screentestservices.teststarted.emit(false);
    this.route.navigate(['numberPar']);
  }
  startTimer()
  {
   this.handler=setInterval(
      ()=>
    {
      this.time.sec++;
      if(this.time.sec==59)
      {
        this.time.min+=1;
        this.time.sec=0
      }
      if(this.time.min==59)
      {
        this.time.hr+=1;
        this.time.min=0;
      }
    },1000)

  }
  endTimer()
  {
    this.closeFullscreen()
    clearInterval(this.handler);
  }

  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }

  /* Close fullscreen */
  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }
  onClose()
  {
    this.enableResult=false;
  }
}
