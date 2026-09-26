import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivePost } from './inactive-post';

describe('InactivePost', () => {
  let component: InactivePost;
  let fixture: ComponentFixture<InactivePost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InactivePost],
    }).compileComponents();

    fixture = TestBed.createComponent(InactivePost);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
