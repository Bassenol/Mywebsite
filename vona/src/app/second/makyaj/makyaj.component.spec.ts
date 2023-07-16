import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakyajComponent } from './makyaj.component';

describe('MakyajComponent', () => {
  let component: MakyajComponent;
  let fixture: ComponentFixture<MakyajComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakyajComponent]
    });
    fixture = TestBed.createComponent(MakyajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
