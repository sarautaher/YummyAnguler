import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../Service/categories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  categorie:any[]=[]
  MealId:any;
  isLoading: boolean = false;
constructor( private _categories:CategoriesService, private _ActivatedRoute: ActivatedRoute){

}
 
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe((params)=>{
    this.MealId=params.get('id');;
    this.Categories(this.MealId)
  }
  )

}
Categories(id:string){
  this._categories.getCategories(id).subscribe({
    next:(res)=>{
console.log(res)
      this.categorie=res.meals;
this.isLoading=true;
    }
  })
}
}
