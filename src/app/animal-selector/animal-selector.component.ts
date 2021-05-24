import { Component, OnInit } from '@angular/core';
import animals from './animals';
@Component({
  selector: 'app-animal-selector',
  templateUrl: './animal-selector.component.html',
  styleUrls: ['./animal-selector.component.css'],
})
export class AnimalSelectorComponent implements OnInit {
  animals: any[] = animals;
  usertext = '';

  constructor() {}

  ngOnInit(): void {
    // let nums = [1, 2, 3];s
    // let exists = nums.includes(2);
    // console.log(exists);
  }
  checkAnimal() {
    let filtered = this.animals.filter(
      (animal) => animal.text.toLowerCase() == this.usertext.toLowerCase()
    );
    let isPresent = filtered.length > 0 ? true : false;
    return isPresent;
  }
}
