import { TestBed } from '@angular/core/testing';
import {MapreflexService} from './mapreflex.service';


describe('MapreflexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapreflexService = TestBed.get(MapreflexService);
    expect(service).toBeTruthy();
  });
});
