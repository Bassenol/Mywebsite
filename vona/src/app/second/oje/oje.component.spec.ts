import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OjeComponent } from './oje.component';

describe('OjeComponent', () => {
  let component: OjeComponent;
  let fixture: ComponentFixture<OjeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OjeComponent]
    });
    fixture = TestBed.createComponent(OjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
