import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutesRoutingModule } from './routes-routing.module';
import { NgZorroAntdModule } from '../share/ng-zorro-antd.module';


import { HeaderComponent } from '../layout/header/header.component';
import { LogoComponent } from '../layout/header/logo/logo.component';
import { NavigationComponent } from '../layout/header/navigation/navigation.component';
import { SearchbarComponent } from '../layout/header/searchbar/searchbar.component';

import { FooterComponent } from '../layout/footer/footer.component';
import { LayoutComponent } from '../layout/layout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ToolsComponent } from './tools/tools.component';
import { PasswdGenComponent } from './tools/passwdgen/passwdgen.component';
import { Error403Component } from './sessions/403.component';
import { Error404Component } from './sessions/404.component';
import { Error500Component } from './sessions/500.component';


const COMPONENTS: any[] = [
    HeaderComponent,
    LogoComponent,
    NavigationComponent,
    SearchbarComponent,
    FooterComponent,
    LayoutComponent,
    HomepageComponent,
    ToolsComponent,
    PasswdGenComponent,
    Error403Component,
    Error404Component,
    Error500Component,
  ];
  const COMPONENTS_DYNAMIC: any[] = [];
  @NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        RoutesRoutingModule,
        NgZorroAntdModule,
      ],
    declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
    providers: []
  })
export class RoutesModule {}