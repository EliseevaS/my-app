import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  public title: string = "hello world";
  public counts: string[] = [];

  public paragraphe: string="120 dollars kiss me";

  public repeatStringThreeTimes() {
    // let count: number = 3;
    for (let i=0; i<3; i++) {
      console.log(this.paragraphe);
      this.counts.push(this.paragraphe);
    }

  }
}
//davaite pit vodkou
/*
skolko mosno oge pit vodkou
davaite pereidem k pivou */