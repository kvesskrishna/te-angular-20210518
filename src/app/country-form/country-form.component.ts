import { Component, OnInit } from '@angular/core';
import countries from './countries'
@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {
countries = countries;
defaultCountry: any = 'uk';
defaultState: any = '';
states: any = ['Select Country First']
  constructor() { }

  ngOnInit(): void {
    this.defaultState = this.states[0]
    let dc = this.countries.filter(c=>c.name.toLowerCase()==this.defaultCountry.toLowerCase());
    this.defaultCountry = dc.length>0?dc[0].id:0;
    if(this.defaultCountry!==0) {
      this.changeStates()
    }
  }
  submitHandler(form) {
    console.log(form.value);
    form.value.country = '1';
  }
  changeStates() {
    console.log(this.defaultCountry);
    let country = this.countries.filter(c=>c.id==this.defaultCountry)
    this.states = [...country[0].states];
    this.defaultState = this.states[0]
    console.log(this.states);
  }

}
