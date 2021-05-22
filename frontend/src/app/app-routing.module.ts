import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SportTypesComponent} from './sport-types/sport-types.component';
import {SportTypesListComponent} from './sport-types/sport-types-list/sport-types-list.component';

const routes: Routes = [
  {
    path: '',
    component: SportTypesComponent,
  },
  {
    path: 'sports/:type',
    component: SportTypesListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
