import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ICustomer } from "../../interfaces/icustomer";

import { CustomerService } from "../../services/customer/customer.service";
import { CityService } from "../../services/city/city.service";
import { AddressService } from "../../services/address/address.service";
import { IAddress } from "src/app/interfaces/iaddress";
import { Guid } from "guid-typescript";

@Component({
	selector: "app-customer-form",
	templateUrl: "./customer-form.component.html",
	styleUrls: ["./customer-form.component.scss"],
})
export class CustomerFormComponent implements OnInit {
	customerForm: FormGroup;
	Addresses: FormArray;
	cities: { name: string }[];

	private currentCustomer: ICustomer;

	constructor(
		private $fb: FormBuilder,
		private _customerService: CustomerService,
		private _cityService: CityService,
		private _addressService: AddressService
	) {}

	ngOnInit(): void {
		this.getCities();

		this.Addresses = this.$fb.array([this.createAddressGroup()]);

		this.customerForm = this.$fb.group({
			Firstname: ["", Validators.required],
			Lastname: ["", Validators.required],
			Birthday: [null, Validators.required],
			Sex: ["", Validators.required],
			PhoneNumber: ["", [Validators.required, Validators.minLength(10)]],
			EmailAddress: ["", [Validators.required, Validators.email]],
			Addresses: this.Addresses,
		});
	}

	// Appends a new FormGroup to Addresses and as result update interface
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

	// Consume CityService, emulating an API http request
	getCities(): void {
		this.cities = this._cityService.getCityList();
	}

	onSubmit(): void {
		const {
			Firstname,
			Lastname,
			Birthday,
			Sex,
			PhoneNumber,
			EmailAddress,
		}: ICustomer = this.customerForm.value;

		const customer: ICustomer = {
			ID: Guid.create().toString(),
			Firstname: Firstname,
			Lastname: Lastname,
			Birthday: Birthday,
			Sex: Sex,
			PhoneNumber: PhoneNumber,
			EmailAddress: EmailAddress,
		};

		let { Addresses }: { Addresses: IAddress[] } = this.customerForm.value;

		Addresses.forEach((item: IAddress) => {
			item.ID = Guid.create().toString();
			item.GetCustomer = customer.ID;
		});

		this._customerService.postCustomer(customer).subscribe(() => {
			this._addressService.postAddress(Addresses);
		});
	}

	onReset(): void {
		this.customerForm.reset();
	}
}
