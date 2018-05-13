import { Injectable } from '@angular/core';
import { Bookmark } from './bookmark-list/bookmark.model';

@Injectable()
export class BookmarkService {
  
  allbookmark : Bookmark[] = [
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

  expAllBookmark : Bookmark[] = [
    new Bookmark(
      'Facebook',
      'https://fb.com',
      'A time wasting platform to destory your life yourselves'
    ),
    new Bookmark(
      'IBM',
      'https://ibm.com',
      'Creepy machine sellers turned into a business people by fate.'
    )
  ];


  constructor() { }

  addBookmark(title : string, link:string,description : string){
    this.allbookmark.push(new Bookmark(title,link,description));
  }

}
