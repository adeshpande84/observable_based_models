import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ClinicsComponent } from '../clinics/clinics.component';

@Component({
	selector: 'my-app',
	directives: [ROUTER_DIRECTIVES],
	template: `<h1>Observable based models</h1>
		
		<div class="container">
			<a [routerLink]="['Clinics']">Clinics</a>
			<router-outlet></router-outlet>
		</div>
	`,
	providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS]
})

@RouteConfig([
	{
		path: '/clinics',
		name: 'Clinics',
		component: ClinicsComponent
	}
])

export class AppComponent { 

}