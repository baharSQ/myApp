import { Component } from '@angular/core';
export class Hero {
  name: string;
  inStock: number;
  date: string;
  image: string;
  quantity: number;
}
const HEROES: Hero[] = [
  { inStock: 0, name: 'Game1', date: '3.3.2017', image: '../img/game.jpg',quantity:0},
  { inStock: 6, name: 'Game2', date: '1.5.2016', image: '../img/game.jpg',quantity:0},

  { inStock: 13, name: 'Game3', date: '1.3.2016', image: '../img/game.jpg',quantity:0},
  { inStock: 14, name: 'Game4', date: '3.5.2017', image: '../img/game.jpg',quantity:0}
];
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List of Games';
  heroes = HEROES;
  selectedHero: Hero;
  upQuantity(hero){
    if(hero.quantity < hero.inStock)
    hero.quantity++;
  }
  downQuantity(hero){
    if(hero.quantity != 0)
    hero.quantity--;
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
