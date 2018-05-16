import { Component, OnInit } from '@angular/core';
import { pageTransition } from '../../shared/animations';

@Component({
  selector: 'wg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [ pageTransition ]
})
export class HeaderComponent implements OnInit {

  imageSrc = './assets/images/wamgloballogo.png';
  hrefTitle = 'WAM Global Limited';
  state = 'in';
  constructor() { }

  ngOnInit() {
  }

}
