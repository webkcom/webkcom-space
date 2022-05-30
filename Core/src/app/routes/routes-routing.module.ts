import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '../layout/layout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ToolsComponent } from './tools/tools.component';
import { PasswdGenComponent } from './tools/passwdgen/passwdgen.component';

import { Error403Component } from './sessions/403.component';
import { Error404Component } from './sessions/404.component';
import { Error500Component } from './sessions/500.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'homepage', pathMatch: 'full' },
      { path: 'homepage', component: HomepageComponent },
      { path: 'tools',component: ToolsComponent },
      { path: 'tools/passwdgen',component: PasswdGenComponent},
      { path: '403', component: Error403Component },
      { path: '404', component: Error404Component },
      { path: '500', component: Error500Component },
    ],
  },
  { path: '**', redirectTo: 'homepage' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class RoutesRoutingModule {}