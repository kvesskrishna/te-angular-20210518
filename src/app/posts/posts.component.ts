import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import countries from './../country-form/countries'
import {createPwdStrengthValidator} from './passwordValidator'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postForm: FormGroup;
  countries = countries;
  defaultCountry = 1;
  states = [];
  // defaultState = '';
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.states = this.countries.filter(country => country.id==this.defaultCountry)[0].states;
    this.createForm()
  }
  get form() {
    return this.postForm.controls;
  }
  //method to initialze the form
  createForm(country=this.defaultCountry, state=this.states[0]) {
    this.postForm = this.fb.group({
      postid: ['',[Validators.required, Validators.minLength(2)]],
      country: [country, Validators.required],
      dob: [''],
      state: [state, Validators.required],
      password: ['', [Validators.required, Validators.minLength(8), createPwdStrengthValidator()]],
      category: ['fiction', [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(10)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  // listen to country changes
  changeStates() {
// update state as per country selected
      this.states = this.countries.filter(country => country.id==this.postForm.value.country)[0].states;

      this.createForm(this.postForm.value.country);
  }
  submitHandler() {
    console.log(this.postForm.value)
  }

}
