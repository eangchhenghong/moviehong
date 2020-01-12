import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieHeaderComponent } from './components/movie-header/movie-header.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { SubMenkuComponent } from './components/left-menu/sub-menku/sub-menku.component';
import { SubMenuComponent } from './components/left-menu/sub-menu/sub-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieHeaderComponent,
    LeftMenuComponent,
    SubMenkuComponent,
    SubMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
