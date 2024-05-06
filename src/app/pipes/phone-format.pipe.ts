import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(value: string): string {
    // Предполагается, что value содержит только цифры (например, '375293689868')
    const countryCode = '+' + value.slice(0, 3);
    const operatorCode = value.slice(3, 5);
    const firstPart = value.slice(5, 8);
    const secondPart = value.slice(8, 10);
    const thirdPart = value.slice(10, 12);
    
    return `${countryCode} (${operatorCode}) ${firstPart}-${secondPart}-${thirdPart}`;
  }

}
