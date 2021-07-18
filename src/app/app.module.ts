import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { RecipeCardsComponent } from './recipe-cards/recipe-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownsComponent,
    RecipeCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
