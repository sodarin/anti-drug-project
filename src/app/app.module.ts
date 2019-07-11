import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {ShareModule} from './share/share.module';
import {FormsModule} from '@angular/forms';
import {ClientModule} from './client/client.module';
import {HttpClientModule} from '@angular/common/http';
import {FrontDeskModule} from './front-desk/front-desk.module';
import {BackgroundModule} from './background/background.module';

@NgModule({
  declarations: [
    AppComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
