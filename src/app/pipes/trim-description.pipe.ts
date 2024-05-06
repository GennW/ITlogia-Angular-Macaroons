import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimDescription'
})
export class TrimDescriptionPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length <= 110) {
      return value;
    } else {
      return value.substring(0, 110) + '...';
    }
  }

}
