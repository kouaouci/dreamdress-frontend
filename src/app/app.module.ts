import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationRobeTradionnelComponent } from './location-robe-tradionnel/location-robe-tradionnel.component';
import { RobeTradionnelCrudComponent } from './robe-tradionnel-crud/robe-tradionnel-crud.component';
import { FormulaireRobeTradionnelCrudComponent } from './formulaire-robe-tradionnel-crud/formulaire-robe-tradionnel-crud.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationRobeTradionnelComponent,
    RobeTradionnelCrudComponent,
    FormulaireRobeTradionnelCrudComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
