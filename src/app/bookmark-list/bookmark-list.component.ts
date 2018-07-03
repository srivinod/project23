import { Component, OnInit } from '@angular/core'; 
import { Bookmark } from './bookmark.model';
import { BookmarkService } from '../bookmark.service';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent implements OnInit {
  closeResult: string;
  editBookmark;
  delBookmark;
  bookmarks : Bookmark[]; 
  modalReference: NgbModalRef; 
  
  constructor(private bookmarkservice : BookmarkService,private modalService: NgbModal) { }
  
  ngOnInit() {     
    this.bookmarks = this.bookmarkservice.allbookmark; 
  }



  onEditLink(openEditModal,index: number) { 
    this.editBookmark = this.bookmarks[index]; 
    this.modalReference = this.modalService.open(openEditModal)
    this.modalReference.result.then((result) => {
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


  onUpdateLink(index:number,titleEdited:string,descEdited:string){
    for (var i = 0, l = this.bookmarks.length; i < l; i++) {
      if(this.bookmarks[i].id === index){
        this.bookmarks[i].title = titleEdited;
        this.bookmarks[i].description = descEdited;     
        this.modalReference.close();
      }
    }
  }

  onDeleteLink(openDeleteModal,index:number){
    this.delBookmark = this.bookmarks[index];     
    this.modalReference = this.modalService.open(openDeleteModal)
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  onConfirmDelete(index:number){
    this.bookmarks.splice(index,1);
    this.modalReference.close();
    
  }
}
