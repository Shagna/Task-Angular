import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`
  //   <h1> {{ title }} </h1>
  //   <h2> My Favorite hero : {{ myHero }}

  //   <p>Heroes:</p>
  // <ul>
  //   <li *ngFor="let hero of heroes">
  //     {{ hero.name }}
  //   </li>
  // </ul>
  // <p *ngIf="heroes.length > 3">There are many heroes!</p>
  // `
})
export class AppComponent {
  title = 'appAngular';
  // myHero = 'Windstrom';

  // heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  heroes=[
    new Hero(1 ,'Windstorm'),
    new Hero(2, 'Bombasto'),
    new Hero(3, 'Magneta'),
    new Hero(4, 'Tornado'),
  ]
  
  myHero = this.heroes[2].name;

  currentCustomer = "Abcd"
  messageClick: string;
  values='';

  onClick(){
    this.messageClick="You are my hero..!";
  }

  onKey(event: any){
    this.values += event.target.value+ " , "
  }

}
