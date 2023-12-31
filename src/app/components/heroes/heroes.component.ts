import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HEROES } from '../../mock/mock-heroes';
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent implements OnInit {
  constructor(private _heroService: HeroService) {}

  heroesList: Hero[] = [];

  getHeroes(): void {
    this._heroService.getAll().subscribe({
      next: (heros) => (this.heroesList = heros),
    });
  }
  ngOnInit(): void {
    this.getHeroes();
  }

  add(name: string): void {
    name = name.trim();

    if (!name) {
      return;
    }

    this._heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroesList.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroesList.filter((h) => h !== hero);
    this._heroService.deleteHero(hero.id).subscribe();
  }
}
