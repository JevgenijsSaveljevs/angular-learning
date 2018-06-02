import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../spotify/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login: LoginServiceService) { }

  ngOnInit() {
  }

  doLogin(): void {
    this.login.Login();
  }

}
