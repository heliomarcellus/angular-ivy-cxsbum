import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './view/home/home.component';
import { MyStylesDirective } from './directives/my-styles.directive';
import { MyForDirective } from './directives/my-for.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    MyStylesDirective,
    MyForDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
