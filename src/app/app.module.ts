import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MailService } from './mail.service';


@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {
      provide: 'mail',
      useClass: MailService
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
