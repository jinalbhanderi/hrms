import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { CompanyFeedComponent } from './company-feed/company-feed.component';
import { DraftComponent } from './draft/draft.component';
import { MentionsComponent } from './mentions/mentions.component';
import { MyFeedComponent } from './my-feed/my-feed.component';
import { SocialRoutingModule } from './social-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    CompanyFeedComponent,
    MyFeedComponent,
    DraftComponent,
    BookmarksComponent,
    MentionsComponent
  ],
  imports: [
    CommonModule,
    SocialRoutingModule,
    NgSelectModule
  ]
})
export class SocialModule { }
