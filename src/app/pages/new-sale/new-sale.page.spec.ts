import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSalePage } from './new-sale.page';

describe('NewSalePage', () => {
  let component: NewSalePage;
  let fixture: ComponentFixture<NewSalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSalePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
