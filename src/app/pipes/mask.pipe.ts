import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask',
})
export class MaskPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    console.log(args);
    let len = value.length;
    let mask = '';
    for (let i = 0; i < args[1] * len; i++) {
      mask += args[0];
    }
    return mask;
  }
}
