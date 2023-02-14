import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { Error404Component } from './pages/error404/error404.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { TableComponent } from './pages/table/table.component';

const routes: Routes = [
  {
    path : '', component : AccueilComponent
  },
  {
    path : 'accueil', component : AccueilComponent
  },
  {
    path : 'profil', component : ProfilComponent 
  },
  {
    path : 'table', component : TableComponent
  },
  {
    path : '**', component : Error404Component
    
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  //One line comment

  /*
    Multimines comment
  */

    /**
     * @params dubfhsbfhsdi
     * @description Eto method dlia objasnenija
     * 
     * 
     * 
     */
    public getProfil() {

    }
 }
