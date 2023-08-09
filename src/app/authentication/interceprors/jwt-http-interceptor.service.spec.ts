import { TestBed } from '@angular/core/testing';

import { JwtHttpInterceptor } from './jwt-http-interceptor.service';

describe('JwtHttpInterceptor', () => {
  let service: JwtHttpInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtHttpInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
