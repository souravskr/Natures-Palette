import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomecomponentComponent } from './PageComponents/homecomponent/homecomponent.component';

// TODO: Vivek [You need to add any modules that I ask you to do into this is the base module for the entire application]
@NgModule({
  declarations: [
    AppComponent,
    HomecomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
