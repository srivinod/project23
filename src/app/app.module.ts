import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { HeaderComponent } from './header/header.component';
import { AddlinkComponent } from './header/addlink/addlink.component';
import { DropdownDirective } from './shared/dropdown.directive'; 


@NgModule({
  declarations: [
    AppComponent,
    BookmarkListComponent,
    HeaderComponent,
    AddlinkComponent,
    DropdownDirective, 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
