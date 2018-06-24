import { TestBed, inject } from '@angular/core/testing';

import { WebSocktService } from './web-sockt.service';

describe('WebSocktService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebSocktService]
    });
  });

  it('should be created', inject([WebSocktService], (service: WebSocktService) => {
    expect(service).toBeTruthy();
  }));
});
