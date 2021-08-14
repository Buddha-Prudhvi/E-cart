import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
public registrationForm:any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name:[''],
      email:[''],
      password:[''],
      gender:[''],
      street:[''],
      city:[''],
      state:[''],
      zipcode:[''],
      mobile:[''],
      check:['']
    })
  }
  get name(){
    return this.registrationForm.get('name')
  }
}
