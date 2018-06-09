import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppConfig } from './app.config';
import { AuthGuard } from './shared/auth/auth.guard';
import { LoginComponent } from './pages/login/login';
import { HomeComponent } from './pages/home/home';
import { GroupsComponent } from './pages/groups/groups';
import { PointsBadgesComponent } from './pages/pointsbadges/pointsbadges';
import { QuestionnairesComponent } from './pages/questionnaires/questionnaires';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire';
import { QuestionnaireResultsComponent } from './pages/questionnaireResults/questionnaireResults';
import { DeleteQuestionnaireComponent } from './pages/deleteQuestionnaire/deleteQuestionnaire';
import { CreateQuestionnaireComponent } from './pages/createQuestionnaire/createQuestionnaire';
import { CreateQuestionnairePointsAssignmentComponent} from './pages/createQuestionnairePointsAssignment/createQuestionnairePointsAssignment';
import { CreateQuestionnaireTest1Component } from './pages/createQuestionnaireTest1/createQuestionnaireTest1';
import { CreateQuestionnaireTest2Component } from './pages/createQuestionnaireTest2/createQuestionnaireTest2';
import { CreateQuestionnaireTextArea1Component } from './pages/createQuestionnaireTextArea1/createQuestionnaireTextArea1';
import { CreateQuestionnaireTextArea2Component } from './pages/createQuestionnaireTextArea2/createQuestionnaireTextArea2';
import { LanguageComponent } from './pages/language/language';

const appRoutes: Routes = [

  // authenticated pages
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'groups', component: GroupsComponent, canActivate: [AuthGuard] },
  { path: 'pointsbadges', component: PointsBadgesComponent, canActivate: [AuthGuard] },
  { path: 'questionnaires', component: QuestionnairesComponent, canActivate: [AuthGuard] },
  { path: 'questionnaire/:id', component: QuestionnaireComponent, canActivate: [AuthGuard] },
  { path: 'questionnaireResults/:id', component: QuestionnaireResultsComponent, canActivate: [AuthGuard] },
  { path: 'deleteQuestionnaire', component: DeleteQuestionnaireComponent, canActivate: [AuthGuard] },
  { path: 'createQuestionnaire', component: CreateQuestionnaireComponent, canActivate: [AuthGuard] },
  { path: 'createQuestionnairePointsAssignment', component: CreateQuestionnairePointsAssignmentComponent, canActivate: [AuthGuard] },

  { path: 'createQuestionnaireTest1', component: CreateQuestionnaireTest1Component, canActivate: [AuthGuard] },
  { path: 'createQuestionnaireTest2', component: CreateQuestionnaireTest2Component, canActivate: [AuthGuard] },
  { path: 'createQuestionnaireTextArea1', component: CreateQuestionnaireTextArea1Component, canActivate: [AuthGuard] },
  { path: 'createQuestionnaireTextArea2', component: CreateQuestionnaireTextArea2Component, canActivate: [AuthGuard] },
  { path: 'language', component: LanguageComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },

  // unauthenticad pages
  { path: 'login', component: LoginComponent },

  // otherwise (redirect to home)
  { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);