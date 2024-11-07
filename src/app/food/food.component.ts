import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Food } from '../food';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-food',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section>
      <img class="food-photo" [src]="food.photo">
      <h2 class="food-heading">{{food.name}}</h2>
      <p class="food-description">{{food.description}}</p>
      <a [routerLink]="['detail', food.id]">View Details</a>
    </section>
  `,
  styleUrl: './food.component.css'
})
export class FoodComponent {
  @Input() food!: Food;
}
