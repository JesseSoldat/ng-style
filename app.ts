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
// @Component({
// 	selector: 'style-sample-app',
// 	template: `
// 	<h4 class="ui horizontal divider header">
// 		style.background-color
// 	</h4>

// 	<div [style.background-color]="'yellow'">
// 		Uses fixed yellow background
// 	</div>

// 	<h4 class="ui horizontal divider header">
//     ngStyle literal
//   </h4>

//   <div [ngStyle]="{color: 'white', 'background-color': 'blue'}">
//       Uses fixed white text on blue background
//   </div>

//   <h4 class="ui horizontal divider header">
//   	ngStyle literal and style.font-size.px
//   </h4>

//   <div>
//   	<span [ngStyle]="{color: 'red'}" [style.font-size.px]="fontSize">
//   		Red Text
//   	</span>
//   </div>

//   <h4 class="ui horizontal divider header">
//   	Play with the color and font-size here
//   </h4>

//   <div class="ui input">
//   	<input type="text" name="color" value="{{color}}" #colorinput>
//   </div>

//   <div class="ui input">
//   	<input type="text" name="fontSize" value="{{fontSize}}" #fontinput>
//   </div>

//   <button class="ui primary button" (click)="apply(colorinput.value, fontinput.value)">
// 	Apply Settings
// 	</button>

//   <h4 class="ui horizontal divider header">
//   	ngStyle with object property from variable
//   </h4>

//   <div>
//       <span [ngStyle]="{color: colorinput.value}">
//         {{ colorinput.value }} text
//       </span>
//   </div>

//   <h4 class="ui horizontal divider header">
//   	style from variable
//   </h4>

//   <div [style.background-color]="colorinput.value" style="color: white;">
//   	{{colorinput.value}} background
//   </div>
// 	`
// })
// class StyleSampleApp {
// 	color: string;
// 	fontSize: number;
// 	style: {
// 		'background-color': string,
// 		'border-radius': string,
// 		border?: string,
// 		width?: string,
// 		height?: string
// 	};

// 	constructor() {
// 		this.fontSize = 12;
// 		this.color = "blue";
// 		this.style = {
// 			'background-color': '#ccc',
// 			'border-radius': '50px',
// 			'height': '30px',
//       'width': '30px',
// 		};
// 	}

// 	apply(color, fontSize){
// 		this.color = color;
// 		this.fontSize = fontSize;
// 	}
// }

// bootstrap(StyleSampleApp);

@Component({
	selector: 'ng-for-app',
	template: `
	<div>
		<h3>NGFOR</h3>
		<h4 class="ui horizontal divider header">
    	Simple list of strings
  	</h4>
		<div class="ui list" *ngFor="#c of cities">
			<div class="item">{{c}}</div>
		</div>

		<h4 class="ui horizontal divider header">
			List of objects
		</h4>
		<table class="ui celled table">
			<thead>
				<tr>
					<th>Name</th>
					<th>Age</th>
					<th>City</th>
				</tr>
			</thead>
			<tr *ngFor="#p of people">
				<td>{{p.name}}</td>
				<td>{{p.age}}</td>
				<td>{{p.city}}</td>
			</tr>
		</table>

		<h4 class="ui horizontal divider header">
			Nested Data
		</h4>

		<div *ngFor="#item of peopleByCity">
			<h2 class="ui header">{{item.city}}</h2>
			<table class="ui celled table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Age</th>
					</tr>
				</thead>

				<tr *ngFor="#p of item.people">
					<td>{{p.name}}</td>
					<td>{{p.age}}</td>
				</tr>
			</table>
		</div>

		<h4 class="ui horizontal divider header">
			List with index
		</h4>

		<div class="ui list" *ngFor="#c of cities; #num = index">
			<div class="item">
				{{num+1}} - {{c}}
			</div>
		</div>

		
	</div>
	`
})
class NgForApp {
	cities: Array<string>;
	people: Array<Object>;
	peopleByCity: Object;

	constructor() {
    this.cities = ['Miami', 'Sao Paulo', 'New York'];
    this.people = [
      { name: 'Anderson', age: 35, city: 'Sao Paulo' },
      { name: 'John', age: 12, city: 'Miami' },
      { name: 'Peter', age: 22, city: 'New York' }
    ];
    this.peopleByCity = [
      {
          city: 'Miami',
          people: [
              { name: 'John', age: 12 },
              { name: 'Angel', age: 22 }
          ]
      },
      {
          city: 'Sao Paulo',
          people: [
              { name: 'Anderson', age: 35 },
              { name: 'Felipe', age: 36 }
          ]
      }
    ];
  };

}

bootstrap(NgForApp);