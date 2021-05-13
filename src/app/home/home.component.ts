import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Quote} from '../quote/quote.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quotess: Quote[] | undefined;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.getQuotes();
  }

  // tslint:disable-next-line:typedef
  getQuotes(){
    this.httpClient.get<any>('https://game-of-thrones-quotes.herokuapp.com/v1/random/15').subscribe(
      response => {
        console.log(response);
        this.quotess = response;
        localStorage.setItem('data', JSON.stringify(this.quotess));

      }
    );
  }

  // tslint:disable-next-line:typedef
  logout() {
    localStorage.removeItem('token');
  }
}
