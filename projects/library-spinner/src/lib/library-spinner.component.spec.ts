import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarySpinnerComponent } from './library-spinner.component';

describe('LibrarySpinnerComponent', () => {
  let component: LibrarySpinnerComponent;
  let fixture: ComponentFixture<LibrarySpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarySpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarySpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
