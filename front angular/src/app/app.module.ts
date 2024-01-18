import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { InterestServices } from './services/interest.service';
import { HttpClientModule } from '@angular/common/http';
import { MoneyFormatPipe } from './components/home/moneyTransform.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MoneyFormatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    InterestServices,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
