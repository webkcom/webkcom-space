import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from './share/ng-zorro-antd.module';

import { RoutesModule } from './routes/route.module'
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RoutesModule,
    RouterModule,
    NgZorroAntdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
