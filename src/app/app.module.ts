import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavmainComponent } from './navmain.component';
import { ContentComponent } from './content.component';
import { FooterComponent } from './footer.component';
import { HomeComponent } from './home.component';
import { ServicesComponent } from './services.component';
import { AboutComponent } from './about.component';
import { PortfolioComponent } from './portfolio.component';
import { ContactComponent } from './contact.component';
import { PricingComponent } from './pricing.component';
import { PageNotFoundComponent } from './page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavmainComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    PricingComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
