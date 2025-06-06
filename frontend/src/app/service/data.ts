import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class Data {
  api_url = "http://localhost:5000/api/register";
  constructor(private http: HttpClient) { }
  sendUser(x: { value: any; }) {
    this.http.post(this.api_url, x).subscribe({
      next: (res) => {
        console.log('Registered:', res);
        alert('Registration successful!');
      },
      error: (err) => {
        console.error(err);
        alert('Registration failed.');
      }
    });
  }
    getUsers(): Observable<any[]> {
        return this.http.get<any[]>('http://localhost:5000/api/get');
    }
}
