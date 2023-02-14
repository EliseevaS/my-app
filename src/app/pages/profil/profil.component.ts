import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  public name: string = "trava";
  public adresse: string = "Montauban";

  public listAdresse: string[] = ["montbeton route de verlhaguet", "montauban", "toulouse"]
}
