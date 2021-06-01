import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberRecognitionComponent } from './number-recognition/number-recognition.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoaderComponent } from './loader/loader.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NumberPracticingComponent } from './number-practicing/number-practicing.component';
import { ScreenTestComponent } from './number-practicing/screen-test/screen-test.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './number-practicing/dashboard/dashboard.component';
import { GraphComponent } from './profile/graph/graph.component';
import { RecommendationComponent } from './profile/recommendation/recommendation.component';
import { ResultComponent } from './result/result.component';



@NgModule({
  declarations: [
    AppComponent,
    NumberRecognitionComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    ProfileComponent,
    LoaderComponent,
    NavComponent,
    AboutComponent,
    NumberPracticingComponent,
    ScreenTestComponent,
    AdminComponent,
    DashboardComponent,
    GraphComponent,
    RecommendationComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
