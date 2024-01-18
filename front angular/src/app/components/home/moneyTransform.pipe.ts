import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyFormat'
})
export class MoneyFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (isNaN(value) || value === null) {
      return '';
    }

    const formatter = new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'COP'
    });

    return formatter.format(value);
  }
}
