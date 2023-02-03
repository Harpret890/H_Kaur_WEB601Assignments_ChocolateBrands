import { Component } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentList {
  contentItem = {
    Id: 1,
    body: 'This is the body of the content',
    type: 'news'
  };
}
