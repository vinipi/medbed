import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamuComponent } from './samu.component';

describe('SamuComponent', () => {
  let component: SamuComponent;
  let fixture: ComponentFixture<SamuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
