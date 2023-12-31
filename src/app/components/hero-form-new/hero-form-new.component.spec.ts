import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFormNewComponent } from './hero-form-new.component';

describe('HeroFormNewComponent', () => {
  let component: HeroFormNewComponent;
  let fixture: ComponentFixture<HeroFormNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroFormNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroFormNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
