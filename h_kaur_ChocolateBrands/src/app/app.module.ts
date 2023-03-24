import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { HovereffectsDirective } from './hovereffects.directive';
import { CreateContentComponent } from './create-content/create-content.component';
import { AppMessagesComponent } from './app-messages/app-messages.component';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    HovereffectsDirective,
    CreateContentComponent,
    AppMessagesComponent,
    ModifyContentComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
