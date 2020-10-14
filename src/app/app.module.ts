import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowcaseItemDisplayComponent } from './showcase-item-display/showcase-item-display.component';
import { ShowcaseItemSourceComponent } from './showcase-item-source/showcase-item-source.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseItemDisplayComponent,
    ShowcaseItemSourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
