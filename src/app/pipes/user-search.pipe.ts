import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userSearch',
})
export class UserSearchPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    console.log(args[0]);
    let key = args[0];
    let filtered = value.filter((user) =>
      user.name.toLowerCase().includes(key.toLowerCase())
    );
    return filtered;
  }
}
