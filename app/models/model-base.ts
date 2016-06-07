import { Injectable, ReflectiveInjector, Injector } from 'angular2/core';
import {HTTP_PROVIDERS, Http, Response, XHRBackend} from 'angular2/http';
import { Observable } from 'rxjs/Rx';
import { BelongsTo } from './belongs-to';
import { HasMany } from './has-many';

export abstract class ModelBase {
	public id: string;
	public http: Http;

	constructor()
	{
		
	}

	public hasMany<T extends ModelBase>(apiRoute: string, foreign_key: string)
	{
		return new HasMany<T>(apiRoute,foreign_key,this.id);
	}

	public belongsTo<T extends ModelBase>(apiRoute: string, primaryKey: string, id: string)
	{

		return new BelongsTo<T>(apiRoute,primaryKey,id);
	}
}