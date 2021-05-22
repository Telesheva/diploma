import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SportTypesComponent} from './sport-types/sport-types.component';
import {SportTypesListComponent} from './sport-types/sport-types-list/sport-types-list.component';
import {SportSectionsComponent} from './sport-sections/sport-sections.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
