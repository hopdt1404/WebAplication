import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
