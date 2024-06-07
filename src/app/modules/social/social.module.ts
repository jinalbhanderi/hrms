import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialRoutingModule } from './social-routing.module';
import { CompanyFeedComponent } from './company-feed/company-feed.component';
import { MyFeedComponent } from './my-feed/my-feed.component';
import { DraftComponent } from './draft/draft.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { MentionsComponent } from './mentions/mentions.component';


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
    SocialRoutingModule
  ],
  // exports:[CompanyFeedComponent]
})
export class SocialModule { }
