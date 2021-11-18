import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ResourcesPipe } from './resources.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HouseTextTileComponent } from './components/house-text-tile/house-text-tile.component';
import { LogoMountainComponent } from './components/logo/logo-mountain/logo-mountain.component';
import { TitleCardComponent } from './components/title-card/title-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    ResourcesPipe,
    HeaderComponent,
    FooterComponent,
    SidenavListComponent,
    HouseTextTileComponent,
    LogoMountainComponent,
    TitleCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
