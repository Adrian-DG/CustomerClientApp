import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class CityService {
	private cityList = [
		{ name: "La Altagracia" },
		{ name: "La Romana" },
		{ name: "Santiago" },
		{ name: "Santo Domingo" },
		{ name: "La Vega" },
	];

	constructor() {}

	getCityList(): { name: string }[] {
		return this.cityList;
	}
}
