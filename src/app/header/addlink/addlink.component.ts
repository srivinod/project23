import { Component, OnInit, ViewChild, ElementRef, Output , EventEmitter} from '@angular/core'; 
import { Bookmark } from '../../bookmark-list/bookmark.model';

@Component({
  selector: 'app-addlink',
  templateUrl: './addlink.component.html',
  styleUrls: ['./addlink.component.css']
})
export class AddlinkComponent implements OnInit {
  @ViewChild('bmkLinkUrl') bookmarkLink : ElementRef;
  bookmarkTitle = 'Microsoft';
  bookmarkDescription = 'Old Boring Search Engine with uselesss information dumped and fetched everyday This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.';

  @Output() linkAdded = new EventEmitter<Bookmark>();

  constructor() { }

  ngOnInit() {
  }

  onLinkAdded(){
    const linkTitle = this.bookmarkLink.nativeElement.value; 
    const newBookmark = new Bookmark (this.bookmarkTitle,linkTitle,this.bookmarkDescription);
    this.linkAdded.emit(newBookmark);
    return false;
  }
}
