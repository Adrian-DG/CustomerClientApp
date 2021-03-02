import { Component, OnInit } from "@angular/core";
import { ICustomer } from "../../interfaces/icustomer";
import { CustomerService } from "../../services/customer/customer.service";

@Component({
	selector: "app-customer-list",
	templateUrl: "./customer-list.component.html",
	styleUrls: ["./customer-list.component.scss"],
})
export class CustomerListComponent implements OnInit {
	customersList: ICustomer[];

	constructor(private _customerService: CustomerService) {}

	ngOnInit(): void {
		// this.getCustomersList();
	}

	getCustomersList() {
		this._customerService
			.getAllCustomers()
			.subscribe((data) => (this.customersList = data));
	}
}
