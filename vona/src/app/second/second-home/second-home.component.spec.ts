import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondHomeComponent } from './second-home.component';

describe('SecondHomeComponent', () => {
  let component: SecondHomeComponent;
  let fixture: ComponentFixture<SecondHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondHomeComponent]
    });
    fixture = TestBed.createComponent(SecondHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
