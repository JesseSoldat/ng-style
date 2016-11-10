import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
	selector: 'style-sample-app',
	template: `
	<div [ngClass]="{bordered: false}">This is never bordered</div>
	<br>
	<div [ngClass]="{bordered: true}">This is always bordered</div>
	<br>
	<div [ngClass]="{bordered: isBordered}">
		Using object literal. Border {{isBordered ? "ON" : "OFF"}}
	</div>
	<br>
	<div [ngClass]="classesObj">
		Using object var. Border {{
			classesObj.bordered ? "ON" : "OFF"
		}}
	</div>
	<br>
	<button (click)="toggleBorder()">Toggle</button>

	<div class="base" [ngClass]="['blue', 'round']">
		This will always have a blue background and round corners
	</div>
	<br>
	<div class="selectors">
		<div>
			<input type="checkbox"
				[checked]="classList.indexOf('blue') > -1"
				(click)="toggleClass('blue')">
				<span>Blue</span>
		</div>

		<div>
			<input type="checkbox"
				[checked]="classList.indexOf('round') > -1"
				(click)="toggleClass('round')">
				<span>Round</span>
		</div>
	</div>
	<br>
	<div class="base" [ngClass]="classList">
		This is {{classList.indexOf('blue') > -1 ? "" : "NOT"}} blue | {{classList.indexOf('round') > -1 ? "" : "NOT"}} round
	</div>


	`
})
class StyleSampleApp {
	isBordered: boolean;
	classesObj: Object;
	classList: Array<string>;

	constructor(){
		this.isBordered = true;
		this.classesObj = {
			bordered: this.isBordered
		};
		this.classList = ['blue', 'round'];
		this.toggleBorder();
	}

	toggleBorder() {
		this.isBordered = !this.isBordered;
		this.classesObj = {
			bordered: this.isBordered
		};
	}

	toggleClass(cssClass) {
		var pos = this.classList.indexOf(cssClass);
		if(pos > -1){
			this.classList.splice(pos, 1);
		} else {
			this.classList.push(cssClass);
		}
	}

}

bootstrap(StyleSampleApp);