import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './modules/material.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QuestionsSectionComponent } from './questions-section/questions-section.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionTitlePipe } from './components/question-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    QuestionsSectionComponent,
    QuestionTitlePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
