import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Qns } from '../data/Qns.model';
import { Adminservices } from '../services/admin-services.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  fileData:string=null;
  constructor(private adminservice:Adminservices) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm)
  {
    let fileAsString;
      if(this.fileData!=null)
      {
        fileAsString=this.fileData.split(',')[1]
        console.log("got a file")
      }
        const data=new Qns
              (
                f.value.question
                ,fileAsString
                ,f.value.option1
                ,f.value.option2
                ,f.value.option3
                ,f.value.option4
                ,f.value.solution
                ,f.value.level
                );
      this.fileData=null
      if(f.value.section=="add")
      {
        this.adminservice.createAddQns(data)
      }
      else if(f.value.section=="sub")
      {
        this.adminservice.createSubQns(data);
      }
      else if(f.value.section=="mul")
      {
        this.adminservice.createMulQns(data);
      }
      else if(f.value.section=="mix")
      {
        this.adminservice.createMixQns(data);
      }
      f.reset();
  }
  onFileSelected(event)
  {
    const selectedFile=event.target.files[0];
    const myreader:FileReader=new FileReader();
    myreader.readAsDataURL(selectedFile);
    myreader.onload=(e)=>{
      this.fileData=myreader.result.toString()
    } 
  }
}
