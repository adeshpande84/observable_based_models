import { Component, OnInit, Input, OnChanges } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Member } from '../../models/member';
import { User } from '../../models/user';

@Component({
	selector: 'member',
	templateUrl: 'app/components/member/member.component.html'
})
export class MemberComponent implements OnInit, OnChanges { 

	@Input() member: Member;
	public user: User;

	constructor(public http: Http) { console.log('member constructor'); }
	
	ngOnInit()
	{
		
		
	}

	ngOnChanges()
	{
		
		console.log('member onchange');
		let o = this.member.user().observableModel.subscribe(data => {
			console.log('user:');
			console.log(data);
		});
		
		this.member.user().get().subscribe(data => { this.user = <User>data;
		});
	}
}