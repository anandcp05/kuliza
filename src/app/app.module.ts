import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { SecondpageComponent } from './components/secondpage/secondpage.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MainpageComponent, SecondpageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
