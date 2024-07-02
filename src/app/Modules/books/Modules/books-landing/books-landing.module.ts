import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksLandingRoutingModule } from './books-landing-routing.module';
import { BooksLandingComponent } from './books-landing.component';
import { HomeLandingComponent } from './Components/home-landing/home-landing.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { SharedModule } from 'src/app/Modules/shared/shared.module';
import { NewReleaseComponent } from './Components/new-release/new-release.component';
import { FeaturedBookComponent } from './Components/featured-book/featured-book.component';


@NgModule({
  declarations: [
    BooksLandingComponent,
    HomeLandingComponent,
    CategoriesComponent,
    NewReleaseComponent,
    FeaturedBookComponent,

  ],
  imports: [
    CommonModule,
    BooksLandingRoutingModule,
    SharedModule
  ]
})
export class BooksLandingModule { }
