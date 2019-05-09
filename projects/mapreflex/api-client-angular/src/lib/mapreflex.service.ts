import {Inject, Injectable} from '@angular/core';

import {
  CountyProperties,
  Options,
  StateProperties,
  ZctaProperties,
  FeatureCollection,
  MultiPolygon
} from '@mapreflex/api-client/types';
import MapreflexClient from '@mapreflex/api-client';
import {from, Observable} from 'rxjs';
import {MAPREFLEX_OPTIONS} from './mapreflex.intefaces';

@Injectable()
export class MapreflexService {

  private api: MapreflexClient;

  constructor(
    @Inject(MAPREFLEX_OPTIONS) public options: Options) {
    this.api = new MapreflexClient(this.options);
  }

  /*
   ZCTAS
   */

  /**
   * @param zipCode
   * @return FeatureCollection<MultiPolygon, ZctaProperties>
   */
  getZctaByZipCode(zipCode: string): Observable<FeatureCollection<MultiPolygon, ZctaProperties>> {

    return from(this.api.zctas.getByZipCode(zipCode));
  }

  /**
   * @param countyGeoId
   * @return FeatureCollection<MultiPolygon, ZctaProperties>
   */
  getZctaByCountyGeoId(countyGeoId: string): Observable<FeatureCollection<MultiPolygon, ZctaProperties>> {

    return from(this.api.zctas.getByCountyGeoId(countyGeoId));
  }

  /**
   * @param countyName (county name Adair)
   * @param state (state ab KY, NY, AI, AL)
   * @return FeatureCollection<MultiPolygon, ZctaProperties>
   */
  getZctaByCountyNameAndStateAb(countyName: string, state: string): Observable<FeatureCollection<MultiPolygon, ZctaProperties>> {

    return from(this.api.zctas.getByCountyNameAndStateAb(countyName, state));
  }


  /**
   * @param zipCodes
   * @return FeatureCollection<MultiPolygon, ZctaProperties>
   */
  getZctasByZipCodes(zipCodes: string[]): Observable<FeatureCollection<MultiPolygon, ZctaProperties>> {

    return from(this.api.zctas.getByZipCodes(zipCodes));
  }

  /**
   * @param northEast (Coordinates of north-east corner [latitude, longitude] )
   * @param southWest (Coordinates of south-west corner [latitude, longitude] )
   * @param intersect (get zips that intersect with the bounding box)
   * @return FeatureCollection<MultiPolygon, ZctaProperties>
   */
  getZctasInBoundingBox(northEast: number[], southWest: number[], intersect: boolean = true): Observable<FeatureCollection<MultiPolygon, ZctaProperties>> {

    return from(this.api.zctas.getInBoundingBox(northEast, southWest, intersect));
  }

  /**
   * @param latitude
   * @param longitude
   * @param radius (size in miles min values is 1 max 500)
   * @return FeatureCollection<MultiPolygon, ZctaProperties>
   */
  getZctasInRadius(latitude: number, longitude: number, radius: number): Observable<FeatureCollection<MultiPolygon, ZctaProperties>> {

    return from(this.api.zctas.getInRadius(latitude, longitude, radius));
  }

  /*
  COUNTIES
   */

  /**
   * @param geoId
   * @return FeatureCollection<MultiPolygon, CountyProperties>
   */
  getCountyByGeoId(geoId: string): Observable<FeatureCollection<MultiPolygon, CountyProperties>> {

    return from(this.api.counties.getByGeoId(geoId));
  }

  /**
   * @param geoIds
   * @return FeatureCollection<MultiPolygon, CountyProperties>
   */
  getCountiesByGeoIds(geoIds: string[]): Observable<FeatureCollection<MultiPolygon, CountyProperties>> {

    return from(this.api.counties.getByGeoIds(geoIds));
  }

  /**
   * @param countyName (County name Adair, etc)
   * @param stateAb (NY, KY, AI, AL, etc)
   * @return FeatureCollection<MultiPolygon, CountyProperties>
   */
  getCountyByCountyNameAndStateAb(countyName: string, stateAb: string): Observable<FeatureCollection<MultiPolygon, CountyProperties>> {

    return from(this.api.counties.getByCountyNameAndStateAb(countyName, stateAb));
  }

  /**
   * @param stateAb (NY,KY,AI, etc)
   * @return FeatureCollection<MultiPolygon, CountyProperties>
   */
  getCountyByStateAb(stateAb: string): Observable<FeatureCollection<MultiPolygon, CountyProperties>> {

    return from(this.api.counties.getByStateAb(stateAb));
  }

  /**
   * @param northEast (Coordinates of north-east corner [latitude, longitude] )
   * @param southWest (Coordinates of south-west corner [latitude, longitude] )
   * @param intersect (get counties that intersect with the bounding box)
   * @return FeatureCollection<MultiPolygon, CountyProperties>
   */
  getCountiesInBoundingBox(northEast: number[], southWest: number[], intersect: boolean = true): Observable<FeatureCollection<MultiPolygon, CountyProperties>> {

    return from(this.api.counties.getInBoundingBox(northEast, southWest, intersect));
  }

  /**
   * @param latitude
   * @param longitude
   * @param radius (size in miles min values is 1 max 500)
   * @return FeatureCollection<MultiPolygon, CountyProperties>
   */
  getCountiesInRadius(latitude: number, longitude: number, radius: number): Observable<FeatureCollection<MultiPolygon, CountyProperties>> {

    return from(this.api.counties.getInRadius(latitude, longitude, radius));
  }

  /*
  STATES
   */

  /**
   *
   * @param stateAb (NY, AK, AI, LA, KY, etc)
   * @return FeatureCollection<MultiPolygon, StateProperties>
   */
  getStateByStateAb(stateAb: string): Observable<FeatureCollection<MultiPolygon, StateProperties>> {

    return from(this.api.states.getByStateAb(stateAb));
  }

  /**
   * @param stateAbs (KY, NY, AI, etc)
   * @return FeatureCollection<MultiPolygon, StateProperties>
   */
  getStatesByStateAbs(stateAbs: string[]): Observable<FeatureCollection<MultiPolygon, StateProperties>> {

    return from(this.api.states.getByStateAbs(stateAbs));
  }

  /**
   *
   * @param northEast (Coordinates of north-east corner [latitude, longitude] )
   * @param southWest (Coordinates of south-west corner [latitude, longitude] )
   * @param  intersect (get states that intersect with the bounding box)
   * @return FeatureCollection<MultiPolygon, StateProperties>
   */
  getStatesInBoundingBox(northEast: number[], southWest: number[], intersect: boolean = true): Observable<FeatureCollection<MultiPolygon, StateProperties>> {

    return from(this.api.states.getInBoundingBox(northEast, southWest, intersect));
  }

  /**
   * @param latitude
   * @param longitude
   * @param radius (size in miles min values is 1 max 500)
   * @return FeatureCollection<MultiPolygon, StateProperties>
   */
  getStatesInRadius(latitude: number, longitude: number, radius: number): Observable<FeatureCollection<MultiPolygon, StateProperties>> {

    return from(this.api.states.getInRadius(latitude, longitude, radius));
  }

}
