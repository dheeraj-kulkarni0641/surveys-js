import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyCreatorComponent } from './survey-creator/survey-creator.component';
import { TestSurveyComponent } from './test-survey/test-survey.component';

const routes: Routes = [
  {path:'home', component:TestSurveyComponent},
  {path:'create-survey', component: SurveyCreatorComponent},
  {path:'', redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
