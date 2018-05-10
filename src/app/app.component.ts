import { Component, OnInit } from '@angular/core';
import { Bookmark } from './bookmark-list/bookmark.model';
import { BookmarkService} from './bookmark.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [BookmarkService]
})
export class AppComponent implements OnInit{

  title = 'app';
 
  ngOnInit()  {
    
  }
 

}
