import { Component, OnInit } from '@angular/core'; 
import { Bookmark } from './bookmark.model';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent implements OnInit {
  BookmarkList : Bookmark[] = [
    new Bookmark(
      'Google',
      'https://gogle.com',
      'Old Boring Search Engine with uselesss information dumped and fetched everyday'
    ),
    new Bookmark(
      'Yahoo',
      'https://yaho.com',
      'Another Search Engine with uselesss information dumped and fetched everyday'
    )
  ];
  
  constructor() { }

  ngOnInit() {     
    
  }

}
