import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalBankComponent } from './local-bank.component';

describe('LocalBankComponent', () => {
  let component: LocalBankComponent;
  let fixture: ComponentFixture<LocalBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
