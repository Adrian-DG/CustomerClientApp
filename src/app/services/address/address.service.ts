import { Injectable, ɵAPP_ID_RANDOM_PROVIDER } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { IAddress } from "../../interfaces/iaddress";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { Guid } from "guid-typescript";

@Injectable({
	providedIn: "root",
})
export class AddressService {
	private addressUrl: string = `${environment.apiUrl}Addresses`;

	constructor(private $http: HttpClient) {}

	getCustomerAddress(id: string): Observable<IAddress[]> {
		return this.$http.get<IAddress[]>(`${this.addressUrl}/${id}`);
	}

	getAllAddress(): Observable<IAddress[]> {
		return this.$http.get<IAddress[]>(this.addressUrl);
	}

	postAddress(addresses: IAddress[]): void {
		addresses.forEach((item: IAddress) =>
			this.$http
				.post<IAddress>(this.addressUrl, item)
				.subscribe((data: IAddress) =>
					console.log(`Address ${data.ID} was added`)
				)
		);
	}

	deleteAddress(id: string): void {
		this.$http
			.delete(`${this.addressUrl}/${id}`)
			.subscribe(() => console.log("Address deleted successfully"));
	}
}
