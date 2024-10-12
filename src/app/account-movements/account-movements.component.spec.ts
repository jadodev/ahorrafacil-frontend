import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMovementsComponent } from './account-movements.component';

describe('AccountMovementsComponent', () => {
  let component: AccountMovementsComponent;
  let fixture: ComponentFixture<AccountMovementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountMovementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountMovementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
