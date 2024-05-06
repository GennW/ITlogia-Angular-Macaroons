import { Injectable } from '@angular/core';
import { ProductType } from '../components/types/change-macaroon.type';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 count: number = 0;
 totalPrice = 0;
 
  constructor() { }

  addProduct(product: ProductType) {
    this.totalPrice += product.price;
  }
}
