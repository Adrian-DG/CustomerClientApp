import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ICustomer } from "../../interfaces/icustomer";
import { CustomerService } from "../../services/customer/customer.service";
import { CityService } from "../../services/city/city.service";

@Component({
	selector: "app-customer-form",
	templateUrl: "./customer-form.component.html",
	styleUrls: ["./customer-form.component.scss"],
})
export class CustomerFormComponent implements OnInit {
	customerForm: FormGroup;
	Addresses: FormArray;
	cities: { name: string }[];

	constructor(
		private $fb: FormBuilder,
		private _customerService: CustomerService,
		private _cityService: CityService
	) {}

	ngOnInit(): void {
		this.getCities();

		this.Addresses = this.$fb.array([this.createAddressGroup()]);

		this.customerForm = this.$fb.group({
			Firstname: ["", Validators.required],
			Lastname: ["", Validators.required],
			Birthday: [null, Validators.required],
			Sex: ["", Validators.required],
			PhoneNumber: ["", Validators.required],
			EmailAddress: ["", Validators.required],
			Addresses: this.Addresses,
		});
	}

	appendAddress(): void {
		this.Addresses.push(this.createAddressGroup());
	}

	createAddressGroup(): FormGroup {
		return this.$fb.group({
			StreetName: ["", Validators.required],
			HouseNumber: [null, Validators.required],
			ZipCode: [null, Validators.required],
			City: ["", Validators.required],
		});
	}

	getCities(): void {
		this.cities = this._cityService.getCityList();
	}

	onSubmit(): void {
		console.log(this.customerForm.value);
	}

	onReset(): void {
		this.customerForm.reset();
	}
}
