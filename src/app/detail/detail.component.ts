import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Food } from '../food';
import { FoodService } from '../food.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img class="food-photo" [src]="Food?.photo">
      <section class="food-describe">
        <h2 class="food-name">{{Food?.name}}</h2>
        <p class="food-description">{{Food?.description}}</p>
      </section>
      <section class="food-nutrition">
        <h2 class="section-heading">Food Nutrition</h2>
        <ul>
          <li>Calorie: {{ Food?.calories }}</li>
          <li>Protien: {{ Food?.protein }}</li>
          <li>Carbonhydrate: {{ Food?.carbs }}</li>
          <li>Fat: {{ Food?.fat }}</li>
        </ul>
      </section>
    </article>
  `,
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  foodService: FoodService = inject(FoodService);
  Food : Food | undefined;

  constructor() {
    const foodId = Number(this.route.snapshot.paramMap.get('id'));
    this.foodService.getFoodById(foodId).then((food: Food | undefined) => { 
      if (food) {
        this.Food = food; 
      }
    });
  }
}
