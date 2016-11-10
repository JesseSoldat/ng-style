import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
	selector: 'style-sample-app',
	template: `
	<div [ngClass]="{bordered: false}">This is never bordered</div>
	<div [ngClass]="{bordered: true}">This is always bordered</div>


	`
})
class StyleSampleApp {

}

bootstrap(StyleSampleApp);