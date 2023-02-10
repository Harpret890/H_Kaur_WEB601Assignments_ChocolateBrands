import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentList = {
    Id: 1,
    Name: 'Cadbury',
    Body: 'This is the body of the content ',
    Type:"Chocolate",
    Brand:"Cadbury",
    Color:'brown'
  };
}
