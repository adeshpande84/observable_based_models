import { Relation } from './relation';
import { Observable } from 'rxjs/Rx';
import {HTTP_PROVIDERS, Http, Response, XHRBackend} from 'angular2/http';

export class BelongsTo<T> extends Relation {
	
	private observableModel: Observable<T>;

	constructor(apiRoute: string, private primaryKey: string, id: string)
	{
		super(apiRoute);
		console.log(primaryKey);
		console.log(id);
		this.observableModel = this.http.get(apiRoute).map(res => res.json()).filter((model: T) => { return model[primaryKey] == id; });

	}

	get()
	{
		return this.observableModel;
	}
}