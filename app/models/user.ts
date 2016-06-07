import { ModelBase } from './model-base';
import { Observable } from 'rxjs/Rx';

export class User extends ModelBase {

	name: string
	
	static apiRoute = 'app/mock_data/users.json';

	constructor(name: string, id?: string) 
  	{
    	super();

	    if(id !== undefined && id != '') {
	      this.id = id;  
	    }
	    
	    this.name = name;
	    
  	}


}