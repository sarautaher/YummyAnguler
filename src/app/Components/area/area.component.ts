import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../Service/categories.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrl: './area.component.css'
})
export class AreaComponent implements OnInit{
  area:any[]=[];  isLoading: boolean = false;
  constructor(private _categories:CategoriesService){

  }
  ngOnInit(): void {
   this. Area() 
  }
  Area(){
    this._categories.Area().subscribe({
      next:(res)=>{
        document.getElementById('area2')?.classList.add('d-none')
        document.getElementById('area')?.classList.remove('d-none')
        console.log(res.meals)
        this.area=res.meals
        this.isLoading=true
      }
      ,error:(res)=>{

      }
    })
  }
  getaree(aree:string){
    this.isLoading=false
    this._categories.getArea(aree).subscribe({
      next:(res)=>{
        document.getElementById('area')?.classList.add('d-none')
        document.getElementById('area2')?.classList.remove('d-none')
        console.log(res)
        this.area=res.meals;
        this.isLoading=true;
      }
    })
  }

}
