import { Component, OnInit, Input, OnChanges } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Clinic } from '../../models/clinic';
import { Member } from '../../models/member';
import { User } from '../../models/user';
import { MemberComponent } from '../member/member.component';

@Component({
	selector: 'clinic',
	templateUrl: 'app/components/clinic/clinic.component.html',
	directives: [MemberComponent]
})
export class ClinicComponent implements OnInit, OnChanges { 

	@Input() clinic: Clinic;
	public members: Member[];

	constructor(public http: Http) { this.members = []; console.log('constructor clinic component');}
	
	ngOnInit()
	{
		
	}

	createMemberObject(data)
	{
		
		//for(var i=0; i<data.length; i++) {
			this.members.push(new Member(data.clinic_id,data.user_id,data.id));
		//}
		

	}

	ngOnChanges()
	{
		//this.clinic.members();
		console.log('ClinicComponent ngOnChanges');
		if(this.clinic !== undefined) {
			console.log('clinic is defined - ' + this.clinic.name);
			this.clinic.members().all().subscribe(data => {
				this.createMemberObject(data);
			},
			err => console.log(err),
			() => console.log(this.members)
			);
		}
	}
}