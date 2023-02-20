import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { MainNavComponent } from './main-nav/main-nav.component';
import { UiCardComponent } from './ui-card/ui-card.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { InfoSectionComponent } from './info-section/info-section.component';
import { BuildSectionComponent } from './build-section/build-section.component';
import { GuideSectionComponent } from './guide-section/guide-section.component';
import { FaqSectionComponent } from './faq-section/faq-section.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    UiCardComponent,
    HeroBannerComponent,
    InfoSectionComponent,
    BuildSectionComponent,
    GuideSectionComponent,
    FaqSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
