import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wg-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.scss']
})
export class OfferDetailsComponent implements OnInit {

  pageTitle = 'Offer Details';
  pageSubtitle = 'Share offer scheduled to open on Tuesday 1 May 2018';
  constructor() { }

  ngOnInit() {
  }

}
