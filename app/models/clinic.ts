export class Clinic {
	id: string;
  	name: string;
  	description: string;

  	constructor(name: string, description: string, id?: string) 
  	{
    	
	    if(id !== undefined && id != '') {
	      this.id = id;  
	    }
	    
	    this.name = name;
	    this.description = description;
	    
  	}
}