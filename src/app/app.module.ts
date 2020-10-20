import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowcaseItemDisplayComponent } from './showcase-item-display/showcase-item-display.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { ShowcaseItemContainerComponent } from './showcase-item-container/showcase-item-container.component';
import { TechnologyTagDisplayComponent } from './technology-tag-display/technology-tag-display.component';
import { ShowcaseItemExpandedComponent } from './showcase-item-expanded/showcase-item-expanded.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseItemDisplayComponent,
    ShowcaseItemContainerComponent,
    TechnologyTagDisplayComponent,
    ShowcaseItemExpandedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
