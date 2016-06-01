import { Component, OnInit } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { ClinicComponent } from '../clinic/clinic.component';

@Component({
	selector: 'clinics',
	directives: [ClinicComponent],
	templateUrl: 'app/components/clinics/clinics.component.html'
})
export class ClinicsComponent implements OnInit { 

	private clinicsUrl = 'app/mock_data/clinics.json';
	public clinics: Array<any>;

	constructor(public http: Http) { this.clinics = []; }
	
	ngOnInit()
	{
		this.http.get(this.clinicsUrl).map(res => res.json()).subscribe(
			data => {this.clinics = data});
	}
}