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
  
}
