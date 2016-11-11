import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

//117
//NG-CLASS
// @Component({
// 	selector: 'class-sample-app',
// 	template: `
// 	<div [ngClass]="{bordered: false}">This is never bordered</div>
// 	<br>
// 	<div [ngClass]="{bordered: true}">This is always bordered</div>
// 	<br>
// 	<div [ngClass]="{bordered: isBordered}">
// 		Using object literal. Border {{isBordered ? "ON" : "OFF"}}
// 	</div>
// 	<br>
// 	<div [ngClass]="classesObj">
// 		Using object var. Border {{
// 			classesObj.bordered ? "ON" : "OFF"
// 		}}
// 	</div>
// 	<br>
// 	<button (click)="toggleBorder()">Toggle</button>

// 	<div class="base" [ngClass]="['blue', 'round']">
// 		This will always have a blue background and round corners
// 	</div>
// 	<br>
// 	<div class="selectors">
// 		<div>
// 			<input type="checkbox"
// 				[checked]="classList.indexOf('blue') > -1"
// 				(click)="toggleClass('blue')">
// 				<span>Blue</span>
// 		</div>

// 		<div>
// 			<input type="checkbox"
// 				[checked]="classList.indexOf('round') > -1"
// 				(click)="toggleClass('round')">
// 				<span>Round</span>
// 		</div>
// 	</div>
// 	<br>
// 	<div class="base" [ngClass]="classList">
// 		This is {{classList.indexOf('blue') > -1 ? "" : "NOT"}} blue | {{classList.indexOf('round') > -1 ? "" : "NOT"}} round
// 	</div>


// 	`
// })
// class ClassSampleApp {
// 	isBordered: boolean;
// 	classesObj: Object;
// 	classList: Array<string>;

// 	constructor(){
// 		this.isBordered = true;
// 		this.classesObj = {
// 			bordered: this.isBordered
// 		};
// 		this.classList = ['blue', 'round'];
// 		this.toggleBorder();
// 	}

// 	toggleBorder() {
// 		this.isBordered = !this.isBordered;
// 		this.classesObj = {
// 			bordered: this.isBordered
// 		};
// 	}

// 	toggleClass(cssClass) {
// 		var pos = this.classList.indexOf(cssClass);
// 		if(pos > -1){
// 			this.classList.splice(pos, 1);
// 		} else {
// 			this.classList.push(cssClass);
// 		}
// 	}

// }

// bootstrap(ClassSampleApp);

//NG-STYLE
@Component({
	selector: 'style-sample-app',
	template: `
	<h4 class="ui horizontal divider header">
		style.background-color
	</h4>

	<div [style.background-color]="'yellow'">
		Uses fixed yellow background
	</div>

	<h4 class="ui horizontal divider header">
    ngStyle literal
  </h4>

  <div [ngStyle]="{color: 'white', 'background-color': 'blue'}">
      Uses fixed white text on blue background
  </div>

  <h4 class="ui horizontal divider header">
  	ngStyle literal and style.font-size.px
  </h4>

  <div>
  	<span [ngStyle]="{color: 'red'}" [style.font-size.px]="fontSize">
  		Red Text
  	</span>
  </div>

  <h4 class="ui horizontal divider header">
  	Play with the color and font-size here
  </h4>

  <div class="ui input">
  	<input type="text" name="color" value="{{color}}" #colorinput>
  </div>

  <h4 class="ui horizontal divider header">
  	ngStyle with object property from variable
  </h4>

  <div>
      <span [ngStyle]="{color: colorinput.value}">
        {{ colorinput.value }} text
      </span>
  </div>





	`
})
class StyleSampleApp {
	color: string;
	fontSize: number;
	style: {
		'background-color': string
	}

	constructor() {
		this.fontSize = 12;
		this.color = "blue";
		this.style = {
			'background-color': '#ccc'
		}
	}
}

bootstrap(StyleSampleApp);

