import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './number-practicing/dashboard/dashboard.component';
import { NumberPracticingComponent } from './number-practicing/number-practicing.component';
import { ScreenTestComponent } from './number-practicing/screen-test/screen-test.component';
import { NumberRecognitionComponent } from './number-recognition/number-recognition.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'about',component:AboutComponent},
  {path:'signin',component:SignInComponent},
  {path:'signup',component:SignUpComponent},
  {path:'profile',component:ProfileComponent},
  {path:'numberRec',component:NumberRecognitionComponent},
  {path:'numberPar',component:NumberPracticingComponent,
        children:[
              {path:'',component:DashboardComponent},
              {path:'test',component:ScreenTestComponent}
            ]
  },
  {path:'',redirectTo:'/',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
