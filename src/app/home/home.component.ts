import { Component, inject } from '@angular/core';
import { FoodComponent } from '../food/food.component';
import { Food } from "../food";
import { FoodService } from "../food.service";
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FoodComponent, CommonModule, LoginComponent],
  template: `
    <section class = header>
      <div class="header-left">
        <h1>Home</h1>
        <form>
          <input type="text" id="search" name="search" placeholder="search for a food" #search>
          <button type="button" id="search-button" (click)="filterResult(search.value)">Search</button>
        </form>
      </div>
      <button type="button" class="login" (click)="navigateToLogin()">Login</button>
    </section>
    <section class="result">
      <app-food *ngFor="let food of filteredFoodList" [food]="food"></app-food>
    </section>

  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foodList: Food[] = [];
  foodService: FoodService = inject(FoodService);
  filteredFoodList: Food[] = [];
  router: Router = inject(Router);
  
  constructor() {
    this.foodService.getFoodList().then((foodList: Food[]) => {
      this.foodList = foodList;
      this.filteredFoodList = foodList;
     });
  }

  filterResult(search: string) {
    if (!search) {
      this.filteredFoodList = this.foodList;
    }

    this.filteredFoodList = this.foodList.filter(food => 
      food?.name?.toLowerCase().includes(search.toLowerCase())
    );
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
