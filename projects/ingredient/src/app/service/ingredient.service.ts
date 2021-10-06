import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Ingredient, IngredientCreateDTO } from './ingredient';
import { Authorize } from 'projects/core-library/src/lib/components/autorize/authorize';

@Injectable({
  providedIn: 'root'
})

@Authorize()
export class IngredientService {

  private API_URL = environment.server;
  private API_Version = environment.v1;
  private backendURL: string = String.prototype.concat(this.API_URL,"/ingredients");
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Ingredient []>{
    return <Observable<Ingredient []>> this.httpClient.get(`${this.backendURL}/ingredients`)
  }

  createIngredient(ingredient: IngredientCreateDTO): Observable<Object>{
    return this.httpClient.post(`${this.backendURL}`, ingredient);
  }

  deleteIngredient(id: string): Observable<Object>{
    return this.httpClient.delete(`${this.backendURL}/${id}`);
  }

  getIngredientById(id: string): Observable<Ingredient>{
    return this.httpClient.get<Ingredient>(`${this.backendURL}/${id}`);
  }
   //TODO: updateIngredient ??
}
