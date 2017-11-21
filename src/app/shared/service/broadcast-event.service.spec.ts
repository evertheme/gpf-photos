import { TestBed, inject } from '@angular/core/testing';

import { BroadcastEventService } from './broadcast-event.service';

describe('BroadcastEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadcastEventService]
    });
  });

  it('should be created', inject([BroadcastEventService], (service: BroadcastEventService) => {
    expect(service).toBeTruthy();
  }));
});
