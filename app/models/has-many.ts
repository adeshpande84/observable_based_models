import { Relation } from './relation';
import { Observable } from 'rxjs/Rx';

export class HasMany<T> extends Relation {
	
	private observableModels: Observable<T>;

	constructor(apiRoute: string, private foreignKey: string, id: string)
	{
		super(apiRoute);

		let v = this.http.get(apiRoute).flatMap(res => { 
			let objects = res.json(); return <Observable<T>>Observable.from(objects); 
		});
		
		this.observableModels = v.filter((model: T) => { return model[foreignKey] == id; });
	}
}