import { Injectable } from '@angular/core';
import { Bookmark } from './bookmark-list/bookmark.model';

@Injectable()
export class BookmarkService {
  
  allbookmark : Bookmark[] = [
    new Bookmark(
      1,
      'Google',
      'https://gogle.com',
      'Old Boring Search Engine with uselesss information dumped and fetched everyday'
    ),
    new Bookmark(
      2,
      'Yahoo',
      'https://yaho.com',
      'Another Search Engine with uselesss information dumped and fetched everyday'
    )
  ];

  expAllBookmark : Bookmark[] = [
    new Bookmark(
      3,
      'Facebook',
      'https://fb.com',
      'A time wasting platform to destory your life yourselves'
    ),
    new Bookmark(
      4,
      'IBM',
      'https://ibm.com',
      'Creepy machine sellers turned into a business people by fate.'
    )
  ];


  constructor() { }

  addBookmark(id:number,title : string, link:string,description : string){
    this.allbookmark.push(new Bookmark(id,title,link,description));
  }

  updateBookmark(id:number,title : string, link:string,description : string){
    this.allbookmark.push(new Bookmark(id,title,link,description));
  }

}
