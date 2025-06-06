import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '../service/data';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-fetch-user',
    imports: [CommonModule, FormsModule],
    templateUrl: './fetch-user.html',
    styleUrl: './fetch-user.css'
})
export class FetchUser implements OnInit {
    users: any[] = [];
    editingUser: any = null;
    editedData = { name: '', email: '', password: '' };

    constructor(private dataService: Data) { }
    ngOnInit() {
        this.dataService.getUsers().subscribe(users => {
            this.fetchUsers()
        });
    }
    editUser(user: any) {
        // Logic to edit a user
        this.editingUser = user;
        this.editedData = { ...user };
    }

    cancelEdit() {
        this.editingUser = null;
    }
    fetchUsers() {
        this.dataService.getUsers().subscribe(users => {
            this.users = users;
            console.log('Fetched users:', users);
        });
    }
    saveEdit() {
        this.dataService.updateUser(this.editingUser._id, this.editedData).subscribe(() => {
            this.fetchUsers();
            this.editingUser = null;
        });
    }

    deleteUser(user: any) {
        this.dataService.deleteUser(user._id).subscribe(() => {
            this.fetchUsers();
        });

    }
}
