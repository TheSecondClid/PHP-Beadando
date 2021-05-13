import { Component, OnInit } from '@angular/core';
import {AgeResponse} from '../age-response/age-response.component';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ageResponses: AgeResponse[] | undefined;
  names: string[] = ['David', 'Josef', 'Daniel', 'Benedek', 'Bendeguz'];
  constructor(private httpClient: HttpClient) {
  }


  ngOnInit(): void {
    this.getAgeResponses();
  }

  // tslint:disable-next-line:typedef
  getAgeResponses(){
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.names.length; i++){
      const name: string = this.names[i];
      this.httpClient.get<AgeResponse>('https://api.agify.io?name=' + name).subscribe(
        response => {
          console.log(response);
          this.ageResponses?.push(response);
        }
      );

    }
    localStorage.setItem('data', JSON.stringify(this.ageResponses));
  }
}
