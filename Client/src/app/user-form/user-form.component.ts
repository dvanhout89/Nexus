import { Component, Injectable } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user: User = new User();

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.createUser(user).subscribe(response => {
      // Handle success or display a success message
      console.log('User created successfully');
      // Reset the form
      form.reset();
    }, error => {
      // Handle error or display an error message
      console.error('Failed to create user', error);
    });
  }
}


