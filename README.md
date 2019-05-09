# Mapreflex Client for Angular 7

Angular wrapper for Mapreflex client

## Documentation

> [Mapreflex client documentation](https://github.com/mapreflex/api-client).

> [Api documentation](https://www.mapreflex.com/swagger-ui.html).

### API KEY

You should generate the api key on [Mapreflex cabinet](https://www.mapreflex.com)

### Installation and usage

```
npm install @mapreflex/api-client-angular --save
```

##### Load the module for your app

Providing the global configuration is optional and when used you should only provide the configuration in your root module.

```
import {MapreflexModule, Options} from '@mapreflex/api-client-angular';
const options: Options = {
  apiKey: 'MAPRELFEX_API_KEY'
};

@NgModule({
  ...
  imports: [
    MapreflexModule.forRoot(options)
  ]
  ...
})
```

##### Inject service for your component

```
import {MapreflexServise} from '@mapreflex/api-client-angular'

@Component()
class appComponent {
  constructor(private mapreflexService: MapreflexService) {}
}
```

### Contribute

#### Building the library
Run npm install on repository root
```
npm install
```
Run npm install on library folder 
```
cd projects/mapreflex/api-client-angular
npm install
npm run build-lib
```

#### Link library
```
npm run link-lib
```
#### Run or Build tester app
```
npm run tester-serve
npm run tester-build
```
## Tests
TBD
