import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
   
  ],
  exports:[
    HeaderComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
