import { ModelBase } from './model-base';
import { Observable } from 'rxjs/Rx';
import { Injectable, ReflectiveInjector, Injector } from 'angular2/core';
import {HTTP_PROVIDERS, Http, Response, XHRBackend} from 'angular2/http';

export class ModelObservableCollection<T> {
	private observableModels: Observable<T>;
	private http: Http;
	

	constructor(private apiRoute: string, private foreign_key: string, private id: string)
	{
		let injector = ReflectiveInjector.resolveAndCreate([HTTP_PROVIDERS,XHRBackend]);
      	this.http = injector.get(Http);
		this.observableModels = this.http.get(this.apiRoute).map(res => res.json());
		
		let v = this.http.get(this.apiRoute).flatMap(res => { 
			let objects = res.json(); return <Observable<T>>Observable.from(objects); 
		});
		
		this.observableModels = v.filter((model: T) => { return model[this.foreign_key] == id; });
		
	}

	find(id: string)
	{
		let f = this.foreign_key;
			
		return this.observableModels.filter( (model:T) => {return model['id'] == id; });
	}

	all()
	{
		return this.observableModels;
	}

}