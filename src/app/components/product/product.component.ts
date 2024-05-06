import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductType } from '../types/change-macaroon.type';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() macaroon: ProductType;
  @Input() i: number = 0;

  @Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();
  

  constructor(private cartService: CartService) {
    this.macaroon = {
      image: '',
      title: '',
      unit: 0,
      price: 0,
    }


  }

  ngOnInit(): void {
  }

  addProductToCart() {
    this.addToCartEvent.emit(this.macaroon);
    this.cartService.addProduct(this.macaroon);

  }

}
