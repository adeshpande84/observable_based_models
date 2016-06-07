import { ModelBase } from './model-base';
import { Observable } from 'rxjs/Rx';
import { Member } from './member';

export class Clinic extends ModelBase {
	  
  	name: string;
  	description: string;
    //static apiRoute: string = '';

  	constructor(name: string, description: string, id?: string) 
  	{
    	super();

	    if(id !== undefined && id != '') {
	      this.id = id;  
	    }
	    
	    this.name = name;
	    this.description = description;
	    
  	}

  	members() 
    {
      return this.hasMany<Member>(Member.apiRoute,'clinic_id');
  	}
}