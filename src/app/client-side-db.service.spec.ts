import { TestBed } from '@angular/core/testing';

import { ClientSideDBService } from './client-side-db.service';

describe('ClientSideDBService', () => {
  let service: ClientSideDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientSideDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
