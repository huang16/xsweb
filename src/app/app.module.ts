import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BottomlistComponent } from './bottomlist/bottomlist.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './in-memory-data.service';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { InitswiperComponent } from './initswiper/initswiper.component'

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BottomlistComponent,
    IndexpageComponent,
    InitswiperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
