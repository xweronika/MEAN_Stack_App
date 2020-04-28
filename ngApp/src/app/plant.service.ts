import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  // tslint:disable-next-line: variable-name
  private _plantsUrl = 'http://localhost:3000/api/events';

  // tslint:disable-next-line: variable-name
  private _specialUrl = 'http://localhost:3000/api/special';


  constructor(private http: HttpClient) { }

  getPlants() {
    return this.http.get<any>(this._plantsUrl);
  }

  getSpecial() {
    return this.http.get<any>(this._specialUrl);
  }




}
