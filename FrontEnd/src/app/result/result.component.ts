import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() res:number;
  out:string;
  @Output() close=new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
    // if(this.res)
    // {
    //   this.out="Correct";
    // }
    // else
    // {
    //   this.out="Wrong";
    // }
  }
  onClose()
  {
    this.close.emit();
  }
}
