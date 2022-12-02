import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-test-ngbootstrap-library',
  templateUrl: './test-ngbootstrap-library.component.html',
  styleUrls: ['./test-ngbootstrap-library.component.css']
})
export class TestNgbootstrapLibraryComponent implements OnInit {

  constructor( private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  public open(modal:any):void{
    this.modalService.open(modal);
  }

}
