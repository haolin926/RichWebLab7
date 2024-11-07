import { Injectable } from '@angular/core';
import { Food } from './food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  url = 'http://localhost:3000/food';
  constructor() { }
  
  async getFoodList(): Promise<Food[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getFoodById(id: number): Promise<Food | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  Login(username: String, password: String) {
    console.log(`Login with ${username} and ${password}`);
  }
}
