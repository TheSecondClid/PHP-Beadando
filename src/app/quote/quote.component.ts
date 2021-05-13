import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';

export class Quote {
  constructor(
    public sentence: string,
    public character: Character
  ) {
  }
}
export class House {
  constructor(
    public name: string,
    public slug: string

  ) {
  }
}
export class Character {
  constructor(
    public name: string,
    public slug: string,
    public house: House
  ) {
  }
}

export class QuoteView {
  constructor(
    public sentence: string,
    public characterName: string,
    public house: string
  ) {
  }
}
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private httpClient: HttpClient
  ) {
    this.quoteViews = [];
  }
  quotes: Quote[] | undefined;
  quoteViews: QuoteView[] | undefined;

  ngOnInit(): void {

    this.quotes = JSON.parse(localStorage.getItem('data') as string);
    // @ts-ignore
    // @ts-ignore
    for (const val of this.quotes) {
      // tslint:disable-next-line:prefer-const
      let quoteView = new QuoteView(val.sentence, val.character.name, val.character.house.name);
      this.quoteViews?.push(quoteView);
    }
    console.log(this.quoteViews);
  }

  delete(id: any): void {
    console.log('Delete: ' + id);

    if (id !== -1) {
      // @ts-ignore
      this.quotes.splice(id, 1);
    }
    localStorage.setItem('data', JSON.stringify(this.quotes));
    this.ngOnInit();
  }
}

