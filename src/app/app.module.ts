import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TextAnimationComponent } from './text-animation/text-animation.component';
import { SlideInComponent } from './slide-in/slide-in.component';
import { FixedSectionComponent } from './fixed-section/fixed-section.component';
import { PinedSectionComponent } from './pined-section/pined-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TextAnimationComponent,
    SlideInComponent,
    FixedSectionComponent,
    PinedSectionComponent,
    FooterSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
