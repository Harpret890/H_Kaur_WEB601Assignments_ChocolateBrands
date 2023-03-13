import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contentsList } from '../helper-files/contentDb';
import { Content } from '../helper-files/content-interface';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() {}
    getContent() : Observable<Content[]>{
      return of(contentsList)
      }
      getContentById(id: number): Observable<any> {
        const content = contentsList.find(c => c.id === id);
        return of(content);
      }
}
