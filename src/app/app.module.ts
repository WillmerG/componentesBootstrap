import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { NgbModule, NgbDateParserFormatter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import localeEsVe from '@angular/common/locales/es-VE';
import { registerLocaleData } from '@angular/common';

import { CustomDateParserFormatter } from './shared/datepicker-formatter';
import { InputMaskModule } from 'racoon-mask-raw';

registerLocaleData(localeEsVe, 'es-VE');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    InputMaskModule
  ],
  providers: [
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
    { provide: LOCALE_ID, useValue: "es-VE" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
