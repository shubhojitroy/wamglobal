import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidencyComponent } from './templates/residency/residency.component';
import { ConfirmationComponent } from './templates/confirmation/confirmation.component';
import { LetterComponent } from './templates/letter/letter.component';
import { OfferDetailsComponent } from './templates/offer-details/offer-details.component';
import { TermsComponent } from './templates/terms/terms.component';
import { RestrictionComponent } from './templates/restriction/restriction.component';

const routes: Routes = [
  { path: 'residency', component: ResidencyComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'letter', component: LetterComponent },
  { path: 'offer-details', component: OfferDetailsComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'restriction', component: RestrictionComponent },
  { path: '', redirectTo: '/residency', pathMatch: 'full' },
  { path: '**', component: ResidencyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
