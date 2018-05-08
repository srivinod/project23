import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../bookmark-list/bookmark.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  bookmark : Bookmark [] ;

  constructor() { }

  ngOnInit() {
  }

  newlinkAdded(newbookmark : Bookmark){
    this.bookmark.push(newbookmark);
    console.log(this.bookmark);
    
  }

}
