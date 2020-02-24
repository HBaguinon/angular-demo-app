import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CarToolModule } from './car-tool/car-tool.module';
import { ColorToolModule } from './color-tool/color-tool.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ColorToolModule, CarToolModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
