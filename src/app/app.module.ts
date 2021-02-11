import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared_component/header/header.component';
import { MainComponent } from './shared_component/main_component/main/main.component';
import { DivBackgroundDirective } from './shared_directives/div-background.directive';
import { ContactComponent } from './shared_component/contact_component/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { BackgrounddivDirective } from './shared_directives/backgrounddiv.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    DivBackgroundDirective,
    ContactComponent,
    BackgrounddivDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
