import { Component, OnInit } from '@angular/core';

export class AgeResponse{
  constructor(
    public name: string,
    public age: number,
    public count: number

  ) {
  }
}

@Component({
  selector: 'app-age-response',
  templateUrl: './age-response.component.html',
  styleUrls: ['./age-response.component.css']
})
export class AgeResponseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
