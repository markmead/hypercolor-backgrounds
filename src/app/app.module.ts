import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PreviewComponent } from './components/preview/preview.component';
import { AnchorComponent } from './components/anchor/anchor.component';
import { ControlsComponent } from './components/controls/controls.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BannerComponent } from './components/banner/banner.component';
import { BannerAnchorsComponent } from './components/banner/anchors/anchors.component';
import { ControlsDirectionsComponent } from './components/controls/directions/directions.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    AnchorComponent,
    ControlsComponent,
    NavigationComponent,
    BannerComponent,
    BannerAnchorsComponent,
    ControlsDirectionsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
