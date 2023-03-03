import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './base/header/header.component';
import { JumbotronComponent } from './base/jumbotron/jumbotron.component';
import { HomeComponent } from './home/home.component';
import { SmallContentComponent } from './base/small-content/small-content.component';
import { ImageContainerComponent } from './base/image-container/image-container.component';
import { FooterComponent } from './base/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumbotronComponent,
    HomeComponent,
    SmallContentComponent,
    ImageContainerComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
