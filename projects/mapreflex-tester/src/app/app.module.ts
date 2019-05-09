import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MapreflexModule, Options} from '@mapreflex/api-client-angular';

const options: Options = {
  apiKey: '06495e8e-ef15-4d3d-a2ce-5691706eded0',
  apiUrl: 'http://localhost:8033'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MapreflexModule.forRoot(options)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
