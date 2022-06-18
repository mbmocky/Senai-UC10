import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmrecupsenhaComponent } from './confirmrecupsenha.component';

describe('ConfirmrecupsenhaComponent', () => {
  let component: ConfirmrecupsenhaComponent;
  let fixture: ComponentFixture<ConfirmrecupsenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmrecupsenhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmrecupsenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
