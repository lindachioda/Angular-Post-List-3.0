import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePost } from './active-post';

describe('ActivePost', () => {
  let component: ActivePost;
  let fixture: ComponentFixture<ActivePost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivePost],
    }).compileComponents();

    fixture = TestBed.createComponent(ActivePost);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
