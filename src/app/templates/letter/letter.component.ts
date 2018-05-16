import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wg-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})
export class LetterComponent implements OnInit {

  pageTitle = 'Chairman\'s Letter';
  imageSrc = 'assets/images/signature.png';
  hrefTitle = 'signature';
  constructor() { }

  ngOnInit() {
  }

}
