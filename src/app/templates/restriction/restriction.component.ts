import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'wg-restriction',
  templateUrl: './restriction.component.html',
  styleUrls: ['./restriction.component.scss']
})
export class RestrictionComponent implements OnInit {

  pageTitle = 'Legal Restriction';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onBack(): void {
    this.router.navigate(['/residency']);
  }

}
