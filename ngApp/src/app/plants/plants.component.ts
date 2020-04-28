import { Component, OnInit } from '@angular/core';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {

  events = [];
  // tslint:disable-next-line: variable-name
  constructor(private _plantService: PlantService) { }

  ngOnInit() {
    this._plantService.getPlants()
      .subscribe(
        res => this.events = res,
        err => console.log(err)
      );
  }

}
