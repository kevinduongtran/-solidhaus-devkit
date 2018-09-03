import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { <%= classify(name) %>Page } from './<%= dasherize(name) %>.page';

const routes: Routes = [
  {
    path: '',
    component: <%= classify(name) %>Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [<%= classify(name) %>Page]
})
export class <%= classify(name) %>PageModule { }
