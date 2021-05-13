import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Quote, QuoteView} from '../quote/quote.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quotess: Quote[] | undefined;
  quotes: Quote[] | undefined;
  quoteViews: QuoteView[] | undefined;

  constructor(private httpClient: HttpClient) {
    this.quoteViews = [];
  }

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
    // @ts-ignore
    this.quotes = JSON.parse(localStorage.getItem('data') as string);
    // @ts-ignore
    for (const val of this.quotes) {
      // tslint:disable-next-line:prefer-const
      let quoteView = new QuoteView(val.sentence, val.character.name, val.character.house.name);
      this.quoteViews?.push(quoteView);
    }
    localStorage.setItem('quoteViews', JSON.stringify(this.quoteViews));
  }

  // tslint:disable-next-line:typedef
  logout() {
    localStorage.removeItem('token');
  }
}
