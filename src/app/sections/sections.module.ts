import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SectionsRoutes } from "./sections.route";
import { RouterModule } from "@angular/router";
import { HelpComponent } from './help/help.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(SectionsRoutes)
  ],
  declarations: [ HomeComponent, HelpComponent ]
})
export class SectionsModule { }
