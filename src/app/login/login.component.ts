import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  login() {
    // tslint:disable-next-line:triple-equals
    if (this.username == 'admin' && this.password == 'admin') {
      localStorage.setItem('token', JSON.stringify(this.username));
      this.goToUrl();
    }
  }
  goToUrl(): void {
    this.document.location.href = 'http://localhost:4200/quote';
  }
}
