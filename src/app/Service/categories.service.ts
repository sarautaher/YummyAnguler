import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor( private _HttpClient:HttpClient ) { }

  Categories():Observable<any>{
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  }
  Area():Observable<any>{
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
  }
  Ingredients():Observable<any>{
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
  }
  getArea(aree:string):Observable<any>{
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${aree}`)
  }
  getIngredients(ingredients:string):Observable<any>{
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
  }
  getCategories(Categories:string):Observable<any>{
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${Categories}`)
  }
  seacrhMyName(name:string):Observable<any>{
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)}
  getMealDetails(MealId:number):Observable<any>{
return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
  }
}
