import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailedComponent } from './book-detailed.component';

describe('GetBookDetailedComponent', () => {
  let component: BookDetailedComponent;
  let fixture: ComponentFixture<BookDetailedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookDetailedComponent]
    });
    fixture = TestBed.createComponent(BookDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
