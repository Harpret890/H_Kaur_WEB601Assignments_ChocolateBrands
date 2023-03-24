import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memoryweb-api";
import { Observable } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor() { }
}
export class InMemoryDataService implements
InMemoryDbService {
  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':'application/json' })
    };

  getContent() : Observable<Content[]>{
    return this.http.get<Content[]>("api/content");
  }

  addContent(newContentItem: Content): Observable<Content>{
    return this.http.post<Content>("api/content", newContentItem, this.httpOptions);
  }
}