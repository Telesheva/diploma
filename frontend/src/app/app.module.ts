import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SportTypesComponent } from './sport-types/sport-types.component';
import { SportTypesListComponent } from './sport-types/sport-types-list/sport-types-list.component';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { SportSectionsComponent } from './sport-sections/sport-sections.component';
import {GoogleMapsModule} from '@angular/google-maps';
import {MaterialModule} from './material.module';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { AddSportTypeComponent } from './admin-pages/add-sport-type/add-sport-type.component';
import { SportSectionFormComponent } from './admin-pages/sport-section-form/sport-section-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SportTypesComponent,
    SportTypesListComponent,
    SportSectionsComponent,
    LoginComponent,
    SigninComponent,
    AddSportTypeComponent,
    SportSectionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
