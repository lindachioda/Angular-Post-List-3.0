import { TestBed } from '@angular/core/testing';

import { PostServicies } from './post-servicies';

describe('PostServicies', () => {
  let service: PostServicies;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostServicies);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
