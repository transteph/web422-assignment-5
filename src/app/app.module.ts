import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavmainComponent } from './navmain.component';
import { ContentComponent } from './content.component';
import { FooterComponent } from './footer.component';
import { HomeComponent } from './home.component';
import { ServicesComponent } from './services.component';
import { PortfolioComponent } from './portfolio.component';
import { SliderComponent } from './slider.component';
import { TestimonialsComponent } from './testimonials.component';
import { AboutComponent } from './about.component';
import { AboutFactsComponent } from './about-facts.component';
import { AboutPartnersComponent } from './about-partners.component';
import { ContactComponent } from './contact.component';
import { PricingComponent } from './pricing.component';


@NgModule({
  declarations: [
    AppComponent,
    NavmainComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    PortfolioComponent,
    SliderComponent,
    TestimonialsComponent,
    AboutComponent,
    AboutFactsComponent,
    AboutPartnersComponent,
    ContactComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
