import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BottomlistComponent } from './bottomlist/bottomlist.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BottomlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
