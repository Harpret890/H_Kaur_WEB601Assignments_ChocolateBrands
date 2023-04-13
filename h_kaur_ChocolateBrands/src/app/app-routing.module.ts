import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailedContentComponent } from './detailed-content/detailed-content.component';

const routes: Routes = [{
  path: ""
,
redirectTo: "/content"
,
pathMatch: "full"
,
},
{ path: "content"
, component: ContentListComponent },
{ path: "content/:id"
, component:
DetailedContentComponent },
{ path: "**"
, component: PageNotFoundComponent }

];
ngOnInit(){
  this.route.paramMap.subscribe(params => {
    this.id = Number(params.get("id") ?? 0);
    this.contentService.getContentItem(this.id)
    .subscribe((c) => {
    this.content = c;
    });
  });
  }
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
function ngOnInit() {
  throw new Error('Function not implemented.');
}

