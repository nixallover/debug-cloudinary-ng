import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CloudinaryModule } from '@cloudinary/ng';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [BrowserModule, AppRoutingModule, CloudinaryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
