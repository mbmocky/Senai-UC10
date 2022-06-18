import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmcontatoComponent } from './confirmcontato.component';

describe('ConfirmcontatoComponent', () => {
  let component: ConfirmcontatoComponent;
  let fixture: ComponentFixture<ConfirmcontatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmcontatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmcontatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
