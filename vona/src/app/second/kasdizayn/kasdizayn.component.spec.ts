import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KasdizaynComponent } from './kasdizayn.component';

describe('KasdizaynComponent', () => {
  let component: KasdizaynComponent;
  let fixture: ComponentFixture<KasdizaynComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KasdizaynComponent]
    });
    fixture = TestBed.createComponent(KasdizaynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
