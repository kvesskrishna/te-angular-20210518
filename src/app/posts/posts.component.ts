import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import countries from './../country-form/countries'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postForm: FormGroup;
  countries = countries;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      postid: ['',[Validators.required, Validators.minLength(2)]],
      country: ['2', Validators.required],
      category: ['fiction', Validators.required],
      title: ['', [Validators.required, Validators.minLength(10)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  get form() {
    return this.postForm.controls;
  }
  submitHandler() {
    console.log(this.postForm.value)
  }

}
