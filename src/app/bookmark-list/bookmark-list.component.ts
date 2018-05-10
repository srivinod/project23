import { Component, OnInit, Input } from '@angular/core'; 
import { Bookmark } from './bookmark.model';
import { BookmarkService } from '../bookmark.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent implements OnInit {
  closeResult: string;

  bookmarks : Bookmark[];
  constructor(private bookmarkservice : BookmarkService,private modalService: NgbModal) { }
  
  ngOnInit() {     
    this.bookmarks = this.bookmarkservice.allbookmark;
    console.log(this.bookmarks);
  }

  onEditLink(openEditModal) {
    this.modalService.open(openEditModal).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  onDeleteLink(openDeleteModal){
    this.modalService.open(openDeleteModal).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

}
