import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyModule } from 'survey-angular-ui';
import { SurveyCreatorComponent } from './survey-creator/survey-creator.component';
import { SurveyCreatorModule } from 'survey-creator-angular';
import { TestSurveyComponent } from './test-survey/test-survey.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyCreatorComponent,
    TestSurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SurveyModule,
    SurveyCreatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
