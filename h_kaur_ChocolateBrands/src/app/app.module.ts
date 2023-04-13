import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { HovereffectsDirective } from './hovereffects.directive';
import { CreateContentComponent } from './create-content/create-content.component';
import { AppMessagesComponent } from './app-messages/app-messages.component';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { DetailedContentComponent } from './detailed-content/detailed-content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    // ContentCardComponent,
    ContentListComponent,
    HovereffectsDirective,
    CreateContentComponent,
    AppMessagesComponent,
    ModifyContentComponentComponent,
    DetailedContentComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
