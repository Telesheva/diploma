import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SportTypesComponent} from './sport-types/sport-types.component';
import {SportTypesListComponent} from './sport-types/sport-types-list/sport-types-list.component';
import {SportSectionsComponent} from './sport-sections/sport-sections.component';
import {LoginComponent} from './login/login.component';
import {SigninComponent} from './signin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: SportTypesComponent,
  },
  {
    path: 'sports',
    component: SportTypesListComponent,
  },
  {
    path: 'sections',
    component: SportSectionsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
