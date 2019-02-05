import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterStartCategories"
})
export class FilterByBrandPipe implements PipeTransform {
  transform(items: any, select?: any): any {
    if (select !== 6) {
      return select ? items.filter(item => item["stars"] === select) : items;
    } else {
      return items;
    }
  }
}
