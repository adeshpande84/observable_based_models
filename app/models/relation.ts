import { Injectable, ReflectiveInjector, Injector } from 'angular2/core';
import {HTTP_PROVIDERS, Http, Response, XHRBackend} from 'angular2/http';

export abstract class Relation {
	public http: Http;

	constructor(private apiRoute: string)
	{
		let injector = ReflectiveInjector.resolveAndCreate([HTTP_PROVIDERS,XHRBackend]);
      	this.http = injector.get(Http);
	}
}