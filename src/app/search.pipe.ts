import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(categories: any[], term: string):any[] {
    return categories.filter((categorie)=>{
     return categorie.title.toLowerCase().includes(term.toLowerCase())
    });
  }

}
