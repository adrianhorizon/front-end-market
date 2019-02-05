import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchAvailable'
})
export class SearchPipe implements PipeTransform {
  transform(items: any, select?: any): any {
    if (select !== false) {
        return select ? items.filter(item => item["available"] === select) : items;
    } else {
        return items;
      }
  }
}
