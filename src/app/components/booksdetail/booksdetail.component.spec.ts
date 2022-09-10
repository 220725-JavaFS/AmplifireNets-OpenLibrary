import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksdetailComponent } from './booksdetail.component';

describe('BooksdetailComponent', () => {
  let component: BooksdetailComponent;
  let fixture: ComponentFixture<BooksdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
