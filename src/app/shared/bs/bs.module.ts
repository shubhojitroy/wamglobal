import { NgModule } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
// import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  imports: [
    ButtonsModule.forRoot(),
    ModalModule.forRoot()
    // TooltipModule.forRoot()
  ],
  declarations: []
})
export class BsModule { }
