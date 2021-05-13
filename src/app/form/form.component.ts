import { Component, OnInit } from '@angular/core';
import {Character, House, Quote, QuoteView} from '../quote/quote.component';

import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // @ts-ignore
  adat = new QuoteView();
  // @ts-ignore
  quotes =  this.quotes = JSON.parse(localStorage.getItem('quoteViews') as string);

  constructor() { }

  ngOnInit(): void {

  }
  save(): void {
    this.quotes.push(this.adat);
    localStorage.setItem('quoteViews', JSON.stringify(this.quotes));
    // @ts-ignore
    //this.adat = new Quote();
  }
}
