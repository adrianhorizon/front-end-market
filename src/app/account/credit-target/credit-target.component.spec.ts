import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditTargetComponent } from './credit-target.component';

describe('CreditTargetComponent', () => {
  let component: CreditTargetComponent;
  let fixture: ComponentFixture<CreditTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
