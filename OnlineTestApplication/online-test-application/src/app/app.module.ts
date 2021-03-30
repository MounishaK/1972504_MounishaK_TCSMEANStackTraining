import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestquestionsRetrieveComponent } from './testquestions-retrieve/testquestions-retrieve.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TestquestionsService } from './testquestions.service';

@NgModule({
  declarations: [
    AppComponent,
    TestquestionsRetrieveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TestquestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
