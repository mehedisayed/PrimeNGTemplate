import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MehediComponent } from './mehedi.component';

describe('MehediComponent', () => {
  let component: MehediComponent;
  let fixture: ComponentFixture<MehediComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MehediComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MehediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
