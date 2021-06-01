import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { screenTestServices } from 'src/app/services/screen-test-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private screentestservice:screenTestServices,private route:Router) { }

  ngOnInit(): void {
  }
 onSubmit(form)
 {
  this.screentestservice.section=form.value.section
  this.screentestservice.level=form.value.level
  this.route.navigate(['/numberPar','test']);
 }
}
