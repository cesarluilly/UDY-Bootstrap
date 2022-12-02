import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popovers',
  templateUrl: './popovers.component.html',
  styleUrls: ['./popovers.component.css'],
  host: { class: 'd-block' },
})
export class PopoversComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
