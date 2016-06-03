import { Component, OnInit, OnChanges } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { ClinicComponent } from '../clinic/clinic.component';
import { Clinic } from '../../models/clinic';
import { ModelObservableCollection } from '../../models/model-observable-collection';

@Component({
	selector: 'clinics',
	directives: [ClinicComponent],
	templateUrl: 'app/components/clinics/clinics.component.html'
})
export class ClinicsComponent implements OnInit, OnChanges { 

	private clinicsUrl = 'app/mock_data/clinics.json';
	public clinics: Clinic[];
	
	constructor(public http: Http) { this.clinics = []; }
	
	ngOnInit()
	{
		
		this.http.get(this.clinicsUrl).map(res => res.json()).subscribe(
			data => {this.clinics = this.createClinicObjects(data); console.log('subscribed to: ');console.log(data);});
		
		//Observable.from([1,2,3]).subscribe(data=>{console.log('subscribed '+data);});
		
		/*this.http.get(this.clinicsUrl).map(res => res.json()).subscribe(data => {
			this.tempObs = <Observable<Clinic>>Observable.from(data);
			this.tempObs.subscribe(data=>console.log('subscribed2 to: '+ data.name));
		});*/

		
		
	}

	createClinicObjects(data)
	{
		let c: Clinic[] = [];
		for(var i=0; i<data.length; i++) {
			c.push(new Clinic(data[i].name,data[i].description,data[i].id));
		}
		return c;

	}

	ngOnChanges()
	{
		//if(this.tempObs !== undefined) {
			//this.tempObs.subscribe(data => console.log('subscribed 2 to: '+data.name));
		//}

	}

}