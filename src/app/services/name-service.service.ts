import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NameServiceService {
  constructor() {}
  uname = 'not defined';
  setName(name) {
    this.uname = name;
  }
}
