import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapImguploadComponent } from './cap-imgupload.component';

describe('CapImguploadComponent', () => {
  let component: CapImguploadComponent;
  let fixture: ComponentFixture<CapImguploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapImguploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapImguploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
