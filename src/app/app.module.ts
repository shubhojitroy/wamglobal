import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ResidencyComponent } from './templates/residency/residency.component';
import { ConfirmationComponent } from './templates/confirmation/confirmation.component';
import { LetterComponent } from './templates/letter/letter.component';
import { OfferDetailsComponent } from './templates/offer-details/offer-details.component';
import { TermsComponent } from './templates/terms/terms.component';
import { RestrictionComponent } from './templates/restriction/restriction.component';

import { HeaderComponent } from './childtemplates/header/header.component';
import { FooterComponent } from './childtemplates/footer/footer.component';
import { BsModule } from './shared/bs/bs.module';


@NgModule({
  declarations: [
    AppComponent,
    ResidencyComponent,
    ConfirmationComponent,
    LetterComponent,
    OfferDetailsComponent,
    TermsComponent,
    RestrictionComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    BsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
