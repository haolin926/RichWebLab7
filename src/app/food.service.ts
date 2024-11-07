import { Injectable } from '@angular/core';
import { Food } from './food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  url = 'http://localhost:3000/food';
  constructor() { }
  food : Food[] = [
    {
      id: 1,
      name: "Apple",
      photo: "assets/apple.jpg",
      description: "A fruit that is good for your health",
      calories: "100",
      protein: "200",
      carbs: "300",
      fat: "123"
    },
    {
      id: 2,
      name: "Banana",
      photo: "assets/banana.jpg",
      description: "A fruit that is good for your health",
      calories: "100",
      protein: "200",
      carbs: "300",
      fat: "123"
    },
    {
      id: 3,
      name: "Orange",
      photo: "assets/orange.jpg",
      description: "A fruit that is good for your health",
      calories: "100",
      protein: "200",
      carbs: "300",
      fat: "123"
    }
  ]
  async getFoodList(): Promise<Food[]> {
    // const data = await fetch(this.url);
    // return (await data.json()) ?? [];
    return this.food;
  }
  async getFoodById(id: number): Promise<Food | undefined> {
    // const data = await fetch(`${this.url}/${id}`);
    // return (await data.json()) ?? {};
    return this.food.find(food => food.id === id);
  }

  Login(username: String, password: String) {
    console.log(`Login with ${username} and ${password}`);
  }
}
