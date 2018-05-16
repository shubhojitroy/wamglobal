import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wg-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  copyrightText = 'copyright 2018 by Evans and Dixons';
  constructor() { }

  ngOnInit() {
  }

}
