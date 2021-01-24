import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AnchorComponent } from './components/anchor.component';

@NgModule({
  declarations: [
    AnchorComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    AnchorComponent
  ],
})
export class AnchorModule {}
