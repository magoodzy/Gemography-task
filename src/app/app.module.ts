import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/dashboard/Components/home/home.component';
import { ReposComponent } from './modules/dashboard/Components/repos/repos.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [AppComponent, HomeComponent, ReposComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule,SharedModule],
providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
