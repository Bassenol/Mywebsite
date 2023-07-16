import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KirpikComponent } from './kirpik.component';

describe('KirpikComponent', () => {
  let component: KirpikComponent;
  let fixture: ComponentFixture<KirpikComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KirpikComponent]
    });
    fixture = TestBed.createComponent(KirpikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
