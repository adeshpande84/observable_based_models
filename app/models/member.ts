import { ModelBase } from './model-base';
import { Observable } from 'rxjs/Rx';
import { User } from './user';

export class Member extends ModelBase {

	clinic_id: string
	user_id: string;
	static apiRoute = 'app/mock_data/members.json';

	constructor(clinic_id: string, user_id: string, id?: string) 
  	{
    	super();

	    if(id !== undefined && id != '') {
	      this.id = id;  
	    }
	    
	    this.clinic_id = clinic_id;
	    this.user_id = user_id;
	    
  	}

  	user()
  	{
  		//console.log("member user(): "+this.user_id);
  		return this.belongsTo<User>(User.apiRoute,'id',this.user_id);
  	}
}