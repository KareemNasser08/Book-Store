import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksLandingComponent } from './books-landing.component';
import { HomeLandingComponent } from './Components/home-landing/home-landing.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { NewReleaseComponent } from './Components/new-release/new-release.component';

const routes: Routes = [
  {
    path: '', component: BooksLandingComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeLandingComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'new-release', component: NewReleaseComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksLandingRoutingModule { }
