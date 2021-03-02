import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { AsideMenuContentComponent } from './components/aside-menu-content/aside-menu-content.component';

@NgModule({
	declarations: [AppComponent, NavbarComponent, AsideMenuComponent, HomeComponent, AsideMenuContentComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
