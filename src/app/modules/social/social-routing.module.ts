import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyFeedComponent } from './company-feed/company-feed.component';
import { SocialComponent } from './social.component';
import { MyFeedComponent } from './my-feed/my-feed.component';
import { DraftComponent } from './draft/draft.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { MentionsComponent } from './mentions/mentions.component';

const routes: Routes = [
  {path:'',component:SocialComponent,
    children:[
      {path:'',redirectTo:'company-feed',pathMatch:'full'},
      {path:'company-feed',component:CompanyFeedComponent},
      {path:'my-feed',component:MyFeedComponent},
      {path:'draft',component:DraftComponent},
      {path:'bookmarks',component:BookmarksComponent},
      {path:'mentions',component:MentionsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialRoutingModule { }
