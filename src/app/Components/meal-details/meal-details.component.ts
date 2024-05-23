import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../Service/categories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.css'
})
export class MealDetailsComponent implements OnInit {
  meal: any;
  Mealid: any;
num:number[]=[];
isLoading: boolean = false;
  constructor(private _mealD: CategoriesService, private _ActivatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.num = Array.from(Array(20).keys()); 
    this._ActivatedRoute.paramMap.subscribe((params) => {
      this.Mealid = params.get('id');
      this.getMeal(this.Mealid);
    });
  }
  ingredients: string[] = [];
  Measures:string[]=[]
  getMeal(id: number): void {
    this._mealD.getMealDetails(id).subscribe({
      next: (res) => {
        console.log(res);
        this.meal = res.meals[0];
        this.ingredients = this.transformIngredients(this.meal);
        this.Measures=this.transformMeasures(this.meal);
        this.isLoading=true;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  transformIngredients(meal: any): string[] {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      if (ingredient) {
        ingredients.push(ingredient);
      }
    }
    return ingredients;
  }
  transformMeasures(meal: any): string[] {
  
    const Measures=[];
    for (let i = 1; i <= 20; i++) {
      
      const Measure=meal[`strMeasure${i}`];
if(Measure){
  Measures.push(Measure)
}
    }
    return Measures;
  }
}



