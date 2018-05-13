import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../../bookmark-list/bookmark.model';
import { BookmarkService } from '../../bookmark.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  private expBookmark : Bookmark[];
  constructor(private bookmarkservice : BookmarkService,private modalService: NgbModal) { }

  ngOnInit() {
    this.expBookmark = this.bookmarkservice.expAllBookmark;
  }

}
