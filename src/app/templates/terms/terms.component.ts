import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wg-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  pageTitle = 'Terms and Conditions';
  constructor() { }

  ngOnInit() {
  }

}
