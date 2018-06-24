import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFileter'
})
export class ProductFileterPipe implements PipeTransform {

  transform(list: any[], filterString:string, keyWorld:string): any {
    console.log(list);
    console.log(filterString);
    console.log(keyWorld);
    if(!filterString || !keyWorld){
        return list;
    }

    return list.filter(item =>{
      let filters = item[filterString];
      return filters.indexOf(keyWorld)>0
  });
  }

}
