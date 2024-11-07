import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FoodService } from '../food.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="login">
        <h2 class="section-heading">Login</h2>
        <form [formGroup]="LoginForm" (submit)="Login()" id="login_form">
          <label for="username">Username</label>
          <input id="username" type="text" formControlName="username" />
          <label for="password">Password</label>
          <input id="password" type="password" formControlName="password" />
          <button type="submit" class="primary">Login</button>
        </form>
      </section>
  `,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  foodService : FoodService = inject(FoodService);
  LoginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  Login() {
    this.foodService.Login(
      this.LoginForm.value.username??'',
      this.LoginForm.value.password??'',
    );
  }
}
