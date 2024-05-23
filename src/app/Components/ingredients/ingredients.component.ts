import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../Service/categories.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css'
})
export class IngredientsComponent implements OnInit {
  ingredients:any[]=[];
  ingredient:any[]=[];
  isLoading: boolean = false;
constructor( private _CategoriesService:CategoriesService){}
ngOnInit(): void {
  this.Ingredients()
}
Ingredients(){
  this._CategoriesService.Ingredients().subscribe({
    next:(res)=>{
      document.getElementById('ingredients')?.classList.add('d-none')
      document.getElementById('ingredient')?.classList.remove('d-none')
console.log(res.meals)
this.ingredients=res.meals.slice(0, 24)
this.isLoading=true

    },
    error:(err)=>{

    }
  })
  
}
getingredients(Ingredient:string){
  this.isLoading=false;
  this._CategoriesService.getIngredients(Ingredient).subscribe({
    next:(res)=>{
      document.getElementById('ingredient')?.classList.add('d-none')
      document.getElementById('ingredients')?.classList.remove('d-none')
      console.log( this.ingredient=res.meals.slice(0, 24))
      this.ingredient=res.meals.slice(0, 24)
      this.isLoading=true;
    },error:(err)=>{
      console.log(err)
    }
  })
}
}
