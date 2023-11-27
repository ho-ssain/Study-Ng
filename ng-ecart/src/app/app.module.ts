import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { TopMenuComponent } from './components/header/top-menu/top-menu.component';
import { MainMenuComponent } from './components/header/main-menu/main-menu.component';
import { SearchComponent } from './components/header/search/search.component';
import { PSearchComponent } from './components/container/p-search/p-search.component';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './components/container/container.component';
import { ProductListComponent } from './components/container/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    SearchComponent,
    ContainerComponent,
    PSearchComponent,
    ProductListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
