import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientGetallComponent } from './ingredient-getall.component';

describe('IngredientGetallComponent', () => {
  let component: IngredientGetallComponent;
  let fixture: ComponentFixture<IngredientGetallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientGetallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientGetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});