import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageLoaderComponent } from './page-loader/page-loader.component';
import { CountdownComponent } from './countdown/countdown.component';
import { PaginationComponent } from './pagination/pagination.component';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentLoaderComponent } from './component-loader/component-loader.component';

import { AlertComponent } from './alert/alert.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    PageLoaderComponent,
    CountdownComponent,
    PaginationComponent,
    ComponentLoaderComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    PageLoaderComponent,
    CountdownComponent,
    PaginationComponent,
    ComponentLoaderComponent,
    AlertComponent

  ]
})
export class SharedModule { }
