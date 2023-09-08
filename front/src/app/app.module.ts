import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './modules/material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './modules/layout/layout.module';
import { PagesModule } from './modules/pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateCourseComponent } from './components/forms/courses/create-course/create-course.component';
import { ModifyCourseComponent } from './components/forms/courses/modify-course/modify-course.component';
import { ModifyPublicationsComponent } from './components/forms/publications/modify-publications/modify-publications.component';
import { CreatePublicationsComponent } from './components/forms/publications/create-publications/create-publications.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCourseComponent,
    ModifyCourseComponent,
    ModifyPublicationsComponent,
    CreatePublicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
