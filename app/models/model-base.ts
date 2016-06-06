import { Injectable, ReflectiveInjector, Injector } from 'angular2/core';
import {HTTP_PROVIDERS, Http, Response, XHRBackend} from 'angular2/http';
import { ModelObservableCollection } from './model-observable-collection';
import { Observable } from 'rxjs/Rx';
import { BelongsTo } from './belongs-to';

export abstract class ModelBase {
	public id: string;
	public http: Http;

	constructor()
	{
		
	}

	public hasMany<T extends ModelBase>(apiRoute: string, foreign_key: string)
	{
		return new ModelObservableCollection(apiRoute, foreign_key, this.id);
	}

	public belongsTo<T extends ModelBase>(apiRoute: string, primaryKey: string, foreignKey: string)
	{
		return new BelongsTo(apiRoute,primaryKey,this[foreignKey]);
	}
}