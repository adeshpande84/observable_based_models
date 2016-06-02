import { ModelBase } from './model-base';
import { Observable } from 'rxjs/Rx';

export class ModelObservableCollection {
	private observableModels: Observable<ModelBase>;

	constructor(ob:Observable<ModelBase>)
	{
		this.observableModels = ob;
	}

	find(id: string)
	{
		return this.observableModels.filter( (model:ModelBase) => {return model.id == id; });
	}

	all()
	{
		
	}

}