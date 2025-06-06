import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '../service/data';

@Component({
  selector: 'app-fetch-user',
  imports: [CommonModule],
  templateUrl: './fetch-user.html',
  styleUrl: './fetch-user.css'
})
export class FetchUser implements OnInit {
    users: any[] = [];
    constructor(private dataService: Data) {}
    ngOnInit() {
        this.dataService.getUsers().subscribe(users => {
            this.users = users;
            console.log('Fetched users:', users);
        });
    }
}
