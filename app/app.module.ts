import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FormatterService }  from './formatter.service';
import { HttpModule }    from '@angular/http';

@NgModule({
  imports:      [ BrowserModule,
                  HttpModule],
  declarations: [ AppComponent ],
	providers:		[ FormatterService ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
