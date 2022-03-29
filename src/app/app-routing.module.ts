import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireRobeTradionnelCrudComponent } from './formulaire-robe-tradionnel-crud/formulaire-robe-tradionnel-crud.component';
import { HomeComponent } from './home/home.component';
import { LocationRobeTradionnelComponent } from './location-robe-tradionnel/location-robe-tradionnel.component';
import { RobeTradionnelCrudComponent } from './robe-tradionnel-crud/robe-tradionnel-crud.component';

const routes: Routes = 
[
  {
    path:'/',
    redirectTo: 'home',
    pathMatch: 'full',
  
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'location-robe-traditionnel',
    component: LocationRobeTradionnelComponent,
  },
  {
    path: 'robe-traditionnel-crud',
    component: RobeTradionnelCrudComponent,
  },
  {
    path:'formulaire-robe-traditionnel-crud',
    component:FormulaireRobeTradionnelCrudComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
