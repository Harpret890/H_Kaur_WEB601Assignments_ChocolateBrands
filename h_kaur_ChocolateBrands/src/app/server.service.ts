import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memoryweb-api";
import { Content } from './helper-files/content-interface';
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor() { }
}
export class InMemoryDataService implements
InMemoryDbService {
createDb() {
// setting it to the value of our array of content
const content : Content[] = Content;
return {content};
}