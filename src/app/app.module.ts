import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { HeaderComponent } from './header/header.component';
import { AddlinkComponent } from './header/addlink/addlink.component'; 
import { SidebarComponent } from './sidebar/sidebar.component';
import { ExploreComponent } from './sidebar/explore/explore.component';
import { ManagefolderComponent } from './sidebar/managefolder/managefolder.component'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


const appRoutes:Routes = [
  {path:'',component: BookmarkListComponent },
  {path:'folder1',component: BookmarkListComponent },
  {path:'explore',component: ExploreComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    BookmarkListComponent,
    HeaderComponent,
    AddlinkComponent, 
    SidebarComponent,
    ExploreComponent,
    ManagefolderComponent 
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
