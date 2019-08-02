import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {ShareModule} from './share/share.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FrontDeskModule} from './front-desk/front-desk.module';
import {BackgroundModule} from './background/background.module';
import zh from '@angular/common/locales/zh';
import {registerLocaleData} from '@angular/common';
import {LoginModalComponent} from './core/modal/login-modal/login-modal.component';
import {CoreModule} from './core/core.module';
import {UserInfoViewModalComponent} from './core/modal/user-info-view-modal/user-info-view-modal.component';
import {UserInfoEditModalComponent} from './core/modal/user-info-edit-modal/user-info-edit-modal.component';
import {QuillEditorComponent, QuillModule} from 'ngx-quill';
import {CreateUserModalComponent} from './core/modal/create-user-modal/create-user-modal.component';

<<<<<<< HEAD
=======



>>>>>>> 67cd71d2ecacf02871de4dac8d0471420f83bed4
registerLocaleData(zh);
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ShareModule,
    FrontDeskModule,
    BackgroundModule,
    FormsModule,
    CoreModule,
    QuillModule.forRoot()
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    QuillEditorComponent,
    QuillModule
    ],
  entryComponents: [
    LoginModalComponent,
    UserInfoViewModalComponent,
    UserInfoEditModalComponent,
    CreateUserModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
