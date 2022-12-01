import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesAboutComponent } from './clothes-about.component';

describe('ClothesAboutComponent', () => {
  let component: ClothesAboutComponent;
  let fixture: ComponentFixture<ClothesAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothesAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothesAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
