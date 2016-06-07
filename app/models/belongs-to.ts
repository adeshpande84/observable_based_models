import { Relation } from './relation';
import { Observable } from 'rxjs/Rx';
import {HTTP_PROVIDERS, Http, Response, XHRBackend} from 'angular2/http';

export class BelongsTo<T> extends Relation {
	
	public observableModel: Observable<T>;

	constructor(apiRoute: string, private primaryKey: string, id: string)
	{
		super(apiRoute);
		let v = this.http.get(apiRoute).flatMap(res => { 
			let objects = res.json(); return <Observable<T>>Observable.from(objects); 
		});
		
		this.observableModel = v.filter((model: T) => { return model[primaryKey] == id; });
		/*this.observableModel = this.http.get(apiRoute).flatMap(res => res.json()).filter((model: T) => { return model[primaryKey] == id; });*/

	}

	public get()
	{
		console.log('BelongsTo get');
		return this.observableModel;
	}
}