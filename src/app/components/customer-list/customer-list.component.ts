import { Component, OnInit } from "@angular/core";
import { ICustomer } from "../../interfaces/icustomer";
import { CustomerService } from "../../services/customer/customer.service";

import { Router } from "@angular/router";

@Component({
	selector: "app-customer-list",
	templateUrl: "./customer-list.component.html",
	styleUrls: ["./customer-list.component.scss"],
})
export class CustomerListComponent implements OnInit {
	customers: ICustomer[];

	constructor(
		private _customerService: CustomerService,
		private $router: Router
	) {}

	ngOnInit(): void {
		this.getCustomersList();
	}

	showAddresses(id: string): void {
		this.$router.navigate(["customers", id, "addresses"]);
	}

	getCustomersList() {
		this._customerService
			.getAllCustomers()
			.subscribe((data: ICustomer[]) => (this.customers = data));
	}
}
