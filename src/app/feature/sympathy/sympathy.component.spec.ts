import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SympathyComponent } from './sympathy.component';

describe('SympathyComponent', () => {
  let component: SympathyComponent;
  let fixture: ComponentFixture<SympathyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SympathyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SympathyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
