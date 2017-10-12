import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { APP_ROUTING } from './app.routes';

// Services
import { SpotifyService } from './services/spotify.service';

// Components
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NophotoPipe } from './pipes/nophoto.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    NavbarComponent,
    NophotoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
