import { Component, OnInit, Input, OnChanges } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Clinic } from '../../models/clinic';

@Component({
	selector: 'clinic',
	templateUrl: 'app/components/clinic/clinic.component.html'
})
export class ClinicComponent implements OnInit, OnChanges { 

	@Input() clinic;
	constructor(public http: Http) { }
	
	ngOnInit()
	{
		
	}

	ngOnChanges()
	{
		if(this.clinic !== undefined) {

		}
	}
}