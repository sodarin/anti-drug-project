import { NgModule } from '@angular/core';
import { LoginModalComponent } from './modal/login-modal/login-modal.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [LoginModalComponent],
  imports: [
    ShareModule
  ],
  exports: [
    LoginModalComponent
  ]
})
export class CoreModule { }
