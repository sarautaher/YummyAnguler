import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../Service/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  categorie:any[]=[]
  categories:any[]=[]
  term:string='';
  searchedItem: string = ''
  isLoading: boolean = false;
constructor( private _categories:CategoriesService){}
 
ngOnInit(): void {
this.Categories()
}
Categories(){
  this._categories.Categories().subscribe({
    next:(res)=>{
console.log(res.categories)
      this.categorie=res.categories;
      this.isLoading=true;
    }
  })
}
seacrhMyName(name:string){
  this.isLoading=false;
  this._categories.seacrhMyName(name).subscribe({
    next:(res)=>{
      console.log(res.meals)
      document.getElementById('categorie')?.classList.add('d-none')
      document.getElementById('categorie2')?.classList.remove('d-none')
      this.categories=res.meals;
      this.isLoading=true;
    }
    ,
      error: (err) => {
        console.error('Error fetching categories', err);
      }
  })
}
}
