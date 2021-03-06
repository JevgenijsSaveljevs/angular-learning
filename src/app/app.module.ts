import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginServiceService } from './spotify/login-service.service';
import { RouterModule, Routes } from "@angular/router";


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { SpotifyModule } from './spotify/spotify.module';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ArtistsScreenComponent } from './artists-screen/artists-screen.component';


const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: 'playlists',
    component: PlaylistListComponent
  },
  {
    path: 'artists',
    component: ArtistsScreenComponent
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
    HomeScreenComponent,
    PlaylistListComponent,
    NavigationBarComponent,
    ArtistsScreenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
   //   { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    SpotifyModule
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
