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
  quotes: QuoteView[] | undefined;
  quoteViews: QuoteView[] | undefined;

  ngOnInit(): void {

    this.quotes = JSON.parse(localStorage.getItem('quoteViews') as string);
    console.log(this.quoteViews);
  }

  delete(id: any): void {
    console.log('Delete: ' + id);

    if (id !== -1) {
      // @ts-ignore
      this.quotes.splice(id, 1);
    }
    localStorage.setItem('quoteViews', JSON.stringify(this.quotes));
    this.ngOnInit();
  }
}

