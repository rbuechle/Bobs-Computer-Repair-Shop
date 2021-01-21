/*
============================================
; Title:  security-question-list.component.ts
; Author: Professor Krasso
; Date:   17 January 2021
; Modified By: Becca Buechle, Rochelle Markham, Rhonda Rivas, King Major
; Description: Base Routing
;===========================================
*/

import {Routes} from '@angular/router';
import {BaseLayoutComponent} from './shared/base-layout/base-layout.component';
import {HomeComponent} from './pages/home/home.component';
import {SessionGuard} from './shared/guards/session.guard';
import {UserListComponent} from './pages/user-list/user-list.component';
import {UserDetailsComponent} from './pages/user-details/user-details.component';
import {SecurityQuestionListComponent} from './pages/security-question-list/security-question-list.component';
import {SecurityQuestionDetailsComponent} from './pages/security-question-details/security-question-details.component';
import {SecurityQuestionCreateComponent} from './pages/security-question-create/security-question-create.component';
import {AuthLayoutComponent} from './shared/auth-layout/auth-layout.component';
import {SigninComponent} from './pages/signin/signin.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [SessionGuard]
      },
      {
        path: 'users',
        component: UserListComponent,
        canActivate: [SessionGuard]
      },
      {
        path: 'users/:userId',
        component: UserDetailsComponent,
        canActivate: [SessionGuard]
      },
      {
        path: 'security-questions',
        component: SecurityQuestionListComponent,
        canActivate: [SessionGuard]
      },
      {
        path: 'security-questions/:questionId',
        component: SecurityQuestionDetailsComponent,
        canActivate: [SessionGuard]
      },
      {
        path: 'security-questions/create/new',
        component: SecurityQuestionCreateComponent,
        canActivate: [SessionGuard]
      },
    ]
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent
      }
    ]
  },
];
