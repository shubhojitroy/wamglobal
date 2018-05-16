import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'wg-residency',
  templateUrl: './residency.component.html',
  styleUrls: ['./residency.component.scss']
})
export class ResidencyComponent implements OnInit {
  pageTitle = 'WAM Global Limited (ACN 624 572 925)';
  cardLabel = 'Country of Primary Residence';

  countryform: FormGroup;
  country: FormControl;
  countries = [
    'Australia',
    'New Zealand',
    'Singapore',
    'Hongkong',
    'China'
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.country = new FormControl('', Validators.required);
  }

  createForm() {
    this.countryform = new FormGroup ({
      country: this.country
    });
  }

  onSubmit() {
    if (this.countryform.valid) {
      if (this.country.value === 'Australia') {
        console.log('Form Submitted!', this.countryform.value);
        this.router.navigate(['/confirmation']);
        this.countryform.reset();
      } else if (this.country.value === 'New Zealand') {
        this.router.navigate(['/confirmation']);
      } else {
        this.router.navigate(['/restriction']);
      }
    }
  }

}
