import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AsideMenuComponent } from "./components/aside-menu/aside-menu.component";
import { HomeComponent } from "./pages/home/home.component";
import { AsideMenuContentComponent } from "./components/aside-menu-content/aside-menu-content.component";
import { CustomerFormComponent } from "./components/customer-form/customer-form.component";
import { CustomerListComponent } from "./components/customer-list/customer-list.component";

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		AsideMenuComponent,
		HomeComponent,
		AsideMenuContentComponent,
		CustomerFormComponent,
		CustomerListComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
