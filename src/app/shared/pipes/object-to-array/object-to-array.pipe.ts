import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectToArray',
})
export class ObjectToArrayPipe implements PipeTransform {
  transform(value: any): Object[] | null {
    if (!value || typeof value !== 'object' || !Object.keys(value)?.length) {
      return null;
    }
    const array: any[] = [];
    Object.keys(value).forEach((key) => {
      array.push(value[key]);
    });
    return array;
  }
}
