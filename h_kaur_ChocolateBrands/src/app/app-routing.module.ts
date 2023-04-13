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
, component: PageNotFoundComponent },
{ path: ""
, component: ContentListComponent },
{ path: ":id"
, component: DetailedContentComponent },


];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
function ngOnInit() {
  throw new Error('Function not implemented.');
}

