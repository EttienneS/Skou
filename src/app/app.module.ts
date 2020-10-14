import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowcaseItemDisplayComponent } from './showcase-item-display/showcase-item-display.component';
import { ShowcaseItemSourceComponent } from './showcase-item-source/showcase-item-source.component';

import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseItemDisplayComponent,
    ShowcaseItemSourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
