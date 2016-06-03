import { Component, OnInit, Input, OnChanges } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Clinic } from '../../models/clinic';
import { Member } from '../../models/member';

@Component({
	selector: 'clinic',
	templateUrl: 'app/components/clinic/clinic.component.html'
})
export class ClinicComponent implements OnInit, OnChanges { 

	@Input() clinic: Clinic;
	public members: Member[];

	constructor(public http: Http) { this.members = []; }
	
	ngOnInit()
	{
		//this.clinic.members();
		this.clinic.members().all().subscribe(data => {
			this.members.push(<Member>data);
		});
	}

	ngOnChanges()
	{
		
	}
}