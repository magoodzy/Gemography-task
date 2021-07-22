import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ReposComponent } from './Components/repos/repos.component';
import { CustomDirective } from './Directive/custom.directive';

@NgModule({
  declarations: [AppComponent, HomeComponent, ReposComponent, CustomDirective],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
