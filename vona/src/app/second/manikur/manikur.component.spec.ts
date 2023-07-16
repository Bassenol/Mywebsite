import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManikurComponent } from './manikur.component';

describe('ManikurComponent', () => {
  let component: ManikurComponent;
  let fixture: ComponentFixture<ManikurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManikurComponent]
    });
    fixture = TestBed.createComponent(ManikurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
