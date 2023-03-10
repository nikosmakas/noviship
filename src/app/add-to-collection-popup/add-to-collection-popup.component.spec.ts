import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCollectionPopupComponent } from './add-to-collection-popup.component';

describe('AddToCollectionPopupComponent', () => {
  let component: AddToCollectionPopupComponent;
  let fixture: ComponentFixture<AddToCollectionPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToCollectionPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToCollectionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
