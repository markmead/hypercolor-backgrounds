import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BannerAnchorsComponent } from './components/banner/anchors/anchors.component';
import { BannerComponent } from './components/banner/banner.component';
import { ControlsComponent } from './components/controls/controls.component';
import { ControlsDirectionsComponent } from './components/controls/directions/directions.component';
import { PreviewComponent } from './components/preview/preview.component';

import { AnchorModule } from './anchor/anchor.module';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    ControlsComponent,
    BannerComponent,
    BannerAnchorsComponent,
    ControlsDirectionsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NavigationModule,
    AnchorModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
