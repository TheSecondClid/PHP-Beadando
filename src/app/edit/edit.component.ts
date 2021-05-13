import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote/quote.component';
import {Character} from '../quote/quote.component';
import {House} from '../quote/quote.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  // @ts-ignore
  adat = new Quote();

  // @ts-ignore
  quotes: Quote[];

  id: any;

  constructor() { }

  ngOnInit(): void {
    this.quotes = JSON.parse(localStorage.getItem('data') as string);
    console.log(this.quotes);
  }
  edit(): void {
    if (this.id !== -1) {
      // @ts-ignore
      this.quotes.splice(this.id, 1, this.adat);
    }
    localStorage.setItem('data', JSON.stringify(this.quotes));
    // @ts-ignore
    this.ngOnInit();
  }
}
