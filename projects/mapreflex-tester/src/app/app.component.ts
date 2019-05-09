import {Component, OnInit} from '@angular/core';
import {MapreflexService, FeatureCollection} from '@mapreflex/api-client-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private maprefexService: MapreflexService) {
  }

  ngOnInit() {
    this.maprefexService.getStatesByStateAbs(['NY', 'KY', 'AI']).subscribe((featureCollection: FeatureCollection) => {
      console.log(featureCollection)
    });
  }
}
