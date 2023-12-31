import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-form-new',
  templateUrl: './hero-form-new.component.html',
  styleUrl: './hero-form-new.component.css',
})
export class HeroFormNewComponent {
  heroForm: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.heroForm = this._fb.group({
      name: ['', [Validators.required]],
      power: ['', [Validators.required]],
      alterEgo: ['', [Validators.required]],
    });
  }
}
