import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent {
  contentsList: any;
  id: null | undefined;
  addContentToList(newContentItem: Content): void {
    this.contentsList.addContent(newContentItem)
    .subscribe((newContentFromServer: any) =>
    this.contentsList.push(newContentFromServer)
    );
  }
}
