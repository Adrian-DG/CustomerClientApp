import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { IAddress } from "../../interfaces/iaddress";
import { AddressService } from "../../services/address/address.service";

@Component({
	selector: "app-addresses",
	templateUrl: "./addresses.component.html",
	styleUrls: ["./addresses.component.scss"],
})
export class AddressesComponent implements OnInit {
	addresses: IAddress[];
	private currentCustomerID: string;

	constructor(
		private $router: Router,
		private $activeRoute: ActivatedRoute,
		private _addressService: AddressService
	) {}

	ngOnInit(): void {
		this.currentCustomerID = this.$activeRoute.snapshot.params.id;
		this.fetchAllAddress();
	}

	fetchAllAddress(): void {
		this._addressService
			.getCustomerAddress(this.currentCustomerID)
			.subscribe((data: IAddress[]) => (this.addresses = data));
	}

	goBack(): void {
		this.$router.navigate([""]);
	}

	DeleteAddress(id: string): void {
		this._addressService.deleteAddress(id);
		this.fetchAllAddress(); // reassigne addresses list
	}
}
