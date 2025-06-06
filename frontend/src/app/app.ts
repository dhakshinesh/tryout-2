import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserForm } from './user-form/user-form';
import { FetchUser } from './fetch-user/fetch-user';


@Component({
  selector: 'app-root',
  imports: [UserForm, FetchUser],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frontend';
}
