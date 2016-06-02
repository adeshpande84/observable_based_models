import { ModelBase } from './model-base';
import { ModelObservableCollection } from './model-observable-collection';
import { Observable } from 'rxjs/Rx';

export class Clinic extends ModelBase {
	id: string;
  	name: string;
  	description: string;

  	constructor(name: string, description: string, id?: string) 
  	{
    	super();
	    if(id !== undefined && id != '') {
	      this.id = id;  
	    }
	    
	    this.name = name;
	    this.description = description;
	    
  	}

  	members() {
  		//return ModelObservableCollection

  	}
}