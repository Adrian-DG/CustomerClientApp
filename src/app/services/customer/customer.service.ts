import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

import { environment } from "../../../environments/environment";
import { ICustomer } from "../../interfaces/icustomer";

import { Guid } from "guid-typescript";

@Injectable({
	providedIn: "root",
})
export class CustomerService {
	private customerUrl: string = `${environment.apiUrl}Customers`;

	constructor(private $http: HttpClient) {}

	getAllCustomers(): Observable<ICustomer[]> {
		return this.$http.get<ICustomer[]>(this.customerUrl);
	}

	postCustomer(customer: ICustomer): Observable<ICustomer> {
		return this.$http.post<ICustomer>(this.customerUrl, customer);
	}
}
