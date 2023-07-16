import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiltbakimComponent } from './ciltbakim.component';

describe('CiltbakimComponent', () => {
  let component: CiltbakimComponent;
  let fixture: ComponentFixture<CiltbakimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CiltbakimComponent]
    });
    fixture = TestBed.createComponent(CiltbakimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
