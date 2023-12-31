import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  heroesList: Hero[] = [];
  constructor(private _heroService: HeroService) {}
  getHeroes(): void {
    this._heroService.getAll().subscribe({
      next: (heros) => (this.heroesList = heros.slice(1, 5)),
    });
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
