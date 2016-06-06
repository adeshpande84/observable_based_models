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

	createMemberObjects(data)
	{
		let c: Member[] = [];
		for(var i=0; i<data.length; i++) {
			c.push(new Member(data[i].clinic_id,data[i].user_id,data[i].id));
		}
		console.log(c);
		return c;

	}

	ngOnChanges()
	{
		//this.clinic.members();
		console.log('ClinicComponent ngOnChanges');
		if(this.clinic !== undefined) {
			console.log('clinic is undefined - ' + this.clinic.name);
			this.clinic.members().all().subscribe(data => { console.log(data);
				this.members = this.createMemberObjects(data);console.log(this.members);
			});
		}
	}
}