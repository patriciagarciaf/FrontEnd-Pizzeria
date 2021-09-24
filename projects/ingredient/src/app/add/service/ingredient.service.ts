import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Authorize } from 'projects/core-lib/src/public-api';
import { environment } from '../../../../../../src/environments/environment';
import { Observable } from 'rxjs';
import { Ingredient } from '../../ingredient';


@Injectable({
  providedIn: 'root'
})

export class IngredientService {

  constructor() { }
}
