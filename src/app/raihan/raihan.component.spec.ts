import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaihanComponent } from './raihan.component';

describe('RaihanComponent', () => {
  let component: RaihanComponent;
  let fixture: ComponentFixture<RaihanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaihanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaihanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
