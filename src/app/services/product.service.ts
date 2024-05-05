import { Injectable } from '@angular/core';
import { ProductType } from '../components/types/change-macaroon.type';

@Injectable()
export class ProductService {

  constructor() { }

  getProduct(): ProductType[] {
    return [
      {
        image: 'changeMac1.png',
        title: 'Макарун с малиной',
        unit: 1,
        price: 1.70,
      },
      {
        image: 'changeMac2.png',
        title: 'Макарун с манго',
        unit: 1,
        price: 1.70,
      },
      {
        image: 'changeMac3.png',
        title: 'Пирог с ванилью',
        unit: 1,
        price: 1.80,
      },
      {
        image: 'changeMac4.png',
        title: 'Пирог с фисташками',
        unit: 1,
        price: 1.90,
      }
    ]
  }
}

