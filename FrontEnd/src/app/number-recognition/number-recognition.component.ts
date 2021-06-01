import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as RecordRTC from 'recordrtc';
import { FlaskRequestService } from '../services/flask-request.service';
import { GeneralServiceService } from '../services/general-service.service';
@Component({
  selector: 'app-number-recognition',
  templateUrl: './number-recognition.component.html',
  styleUrls: ['./number-recognition.component.css']
})
export class NumberRecognitionComponent implements OnInit {
  loader:boolean=true
  rand:string;
  ans:string=" ";
  dir_path:string="../../assets/numberRec/";
  imageFormat:string=".jpg";
  imagePath:string="";
  enableVoice:boolean=false;
  numberImage:string[]=["zero","one","two","three","four","five","six","seven","eight","nine"];
  ngOnInit(): void {
    this.getRandom();
  }
  constructor(private flask:FlaskRequestService,private general:GeneralServiceService,private route:Router){}
    private record;
    private error;
    status:string="Start"
    recording:boolean=false
    blob:Blob;
    getText(ans:string)
    {
      ans=ans.toLowerCase()
      let numStr=this.general.toWords(this.rand)
      console.log(ans)
      console.log(numStr)
      if(numStr.includes(ans)){
        this.ans="Correct";
      }
      else
      {
        this.ans="Incorrect";
      }
    }
    voiceRecord()
    {
      if(this.recording==false)
      {
        this.startRecording();
        this.status="stop";
        this.recording=true;
        setTimeout(()=>
            {
              this.voiceRecord()
            }
            ,1500)
      }
      else
      {
        this.stopRecording();
        this.status="Start";
        this.recording=false;
      }
    }
    startRecording() {
        
        let mediaConstraints = {
            video: false,
            audio: true
        };
        navigator.mediaDevices
            .getUserMedia(mediaConstraints)
            .then(this.successCallback.bind(this), this.errorCallback.bind(this));
    }
   
    successCallback(stream) {
        var options = {
            mimeType: "audio/wav",
            numberOfAudioChannels: 1
        };
        //Start Actual Recording
        var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
        this.record = new StereoAudioRecorder(stream, options);
        this.record.record();
    }
    
    stopRecording() {
        this.record.stop(this.processRecording.bind(this));
    }
    
    processRecording(blob:Blob) {
      let formdata= new FormData();
      formdata.append("file",blob);
      this.flask.voiceRec(formdata).subscribe(
        (res)=>
        {
          if((this.rand+" ").includes(res.keyword))
          {
            this.ans="Correct";
            this
            console.log(res.keyword)
          }
          else
          {
            this.ans="Incorrect";
            console.log(res.keyword)
          }
        },
        (error)=>{
          console.log(error)
        }
      )
    }
    
    errorCallback(error) {
        this.error = 'Can not play audio in your browser';
    }
    getRandom()
    {
      this.rand= Math.floor(Math.random() * 10)+" ";
      this.imagePath=this.dir_path+this.numberImage[Number(this.rand)]+this.imageFormat
      this.ans=" " 
    }
}
