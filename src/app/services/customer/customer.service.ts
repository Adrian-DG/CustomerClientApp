import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { ICustomer } from "../../interfaces/icustomer";

@Injectable({
	providedIn: "root",
})
export class CustomerService {
	private serverUrl: string = environment.apiUrl;
	private endPoint: string = "Customers";

	constructor(private $http: HttpClient) {}

	getAllCustomers(): Observable<ICustomer[]> {
		return this.$http.get<ICustomer[]>(`${this.serverUrl}${this.endPoint}`);
	}

	postCustomer(customer: ICustomer): void {
		this.$http
			.post(`${this.serverUrl}${this.endPoint}`, customer)
			.subscribe(() => console.log("A new customer has been added"));
	}
}
