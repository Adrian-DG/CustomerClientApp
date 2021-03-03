import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { AddressesComponent } from "./pages/addresses/addresses.component";

const routes: Routes = [
	{ path: "customers/:id/addresses", component: AddressesComponent },
	{ path: "home", component: HomeComponent },
	{ path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
