import { Component, OnInit } from '@angular/core';
import { PlantService } from '../plant.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {

  special = [];
  // tslint:disable-next-line: variable-name
  constructor(private _plantService: PlantService, private _router: Router) { }

  ngOnInit() {
    this._plantService.getSpecial()
      .subscribe(
        res => this.special = res,
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this._router.navigate(['/login']);
              // jesli weryfikacja logowania nie powiodla sie - przejdz do trasy logowania
            }
          }
        });
  }

}
