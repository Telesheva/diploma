import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SportTypesComponent } from './components/sport-types/sport-types.component';
import { SportTypesListComponent } from './components/sport-types/sport-types-list/sport-types-list.component';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { SportSectionsComponent } from './components/sport-sections/sport-sections.component';
import {GoogleMapsModule} from '@angular/google-maps';
import {MaterialModule} from './material.module';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { AddSportTypeComponent } from './components/admin-pages/add-sport-type/add-sport-type.component';
import { SportSectionFormComponent } from './components/admin-pages/sport-section-form/sport-section-form.component';
import {SportTypesService} from './services/sport-types/sport-types.service';
import {HttpClientModule} from '@angular/common/http';
import {NgxSpinnerModule} from 'ngx-spinner';

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
    HttpClientModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
