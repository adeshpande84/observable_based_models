import { ModelBase } from './model-base';
import { ModelObservableCollection } from './model-observable-collection';
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
  		//return ModelObservableCollection
      /*this.http.get(this.clinicsUrl).map(res => res.json()).subscribe(data => {
        this.tempObs = new ModelObservableCollection(<Observable<Clinic>>Observable.from(data));
        this.tempObs.find("3").subscribe(data => {let t = <Clinic>data; console.log(t.name);})
      });*/
      
      return this.hasMany<Member>(Member.apiRoute,'clinic_id', this.id);
  	}
}