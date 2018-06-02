import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginServiceService } from './spotify/login-service.service';
import { RouterModule, Routes } from "@angular/router";


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Heroes List' }
  },
  { 
    path: '',
    pathMatch: 'full',
    component: HomeScreenComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
   //   { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
