import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'

import { FormsModule, Validators, FormGroup, FormBuilder }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule,ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})
export class UserForm {
    UserForm: FormGroup;
    constructor( private fb: FormBuilder) {
        this.UserForm = this.fb.group({
        name : ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }
    onSubmit() {
        console.log('Form submitted');
    }
}
