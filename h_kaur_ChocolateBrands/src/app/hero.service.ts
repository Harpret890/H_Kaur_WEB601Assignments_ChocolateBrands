import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentService } from './chocolsteservices/content.service';
import { Content } from './helper-files/content-interface';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // constructor(private messageService: MessageService) { }
  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   this.messageService.add('HeroService: fetched heroes');
  //   return heroes;
  // }
  id: number | undefined;
  content!: Content;
constructor(private route: ActivatedRoute,
private contentService: ContentService) {}
}
