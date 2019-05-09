import {ModuleWithProviders, NgModule} from '@angular/core';
import {MapreflexService} from './mapreflex.service';
import {Options} from '@mapreflex/api-client/types';
import {MAPREFLEX_OPTIONS} from './mapreflex.intefaces';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: []
})
export class MapreflexModule {
  public static forRoot(options?: Options): ModuleWithProviders {
    return {
      ngModule: MapreflexModule,
      providers: [
        MapreflexService,
        {
          provide: MAPREFLEX_OPTIONS,
          useValue: options
        }
      ]
    };
  }

  public static forChild(options?: Options): ModuleWithProviders {
    return {
      ngModule: MapreflexModule,
      providers: [
        MapreflexService,
        {
          provide: MAPREFLEX_OPTIONS,
          useValue: options
        }
      ]
    };
  }
}
