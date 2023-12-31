import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { Location } from '@angular/common';
import { HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero;

  constructor(
    private _router: ActivatedRoute,
    private _heroService: HeroService,
    private _location: Location
  ) {}
  ngOnInit(): void {
    this.getHeroById();
  }

  getHeroById(): void {
    const id = Number(this._router.snapshot.paramMap.get('id'));
    this._heroService.getById(id)?.subscribe((hero) => (this.hero = hero));
    console.log(this.hero);
  }
  goBack(): void {
    this._location.back();
  }

  save(): void {
    if (this.hero) {
      this._heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }
}
