import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidencyComponent } from './residency.component';

describe('ResidencyComponent', () => {
  let component: ResidencyComponent;
  let fixture: ComponentFixture<ResidencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
