import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SportTypesComponent} from './sport-types/sport-types.component';
import {SportTypesListComponent} from './sport-types/sport-types-list/sport-types-list.component';
import {SportSectionsComponent} from './sport-sections/sport-sections.component';
import {LoginComponent} from './login/login.component';
import {SigninComponent} from './signin/signin.component';
import {AddSportTypeComponent} from './admin-pages/add-sport-type/add-sport-type.component';
import {SportSectionFormComponent} from './admin-pages/sport-section-form/sport-section-form.component';

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
  },
  {
    path: 'add-sport-type',
    component: AddSportTypeComponent,
  },
  {
    path: 'sport-section-form',
    component: SportSectionFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
