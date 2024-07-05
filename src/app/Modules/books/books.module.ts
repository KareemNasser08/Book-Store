import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BooksComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule
  ],
  exports:[
  ]
})
export class BooksModule { }
