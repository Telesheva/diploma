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

@NgModule({
  declarations: [
    AppComponent,
    SportTypesComponent,
    SportTypesListComponent,
    SportSectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
