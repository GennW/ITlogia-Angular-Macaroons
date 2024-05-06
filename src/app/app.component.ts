import { Component, OnInit } from '@angular/core';
import { AdvantagesType } from './components/types/advantages.type';
import { ProductType } from './components/types/change-macaroon.type';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  macaroons!: HTMLElement | null;
  orderElement!: HTMLElement | null;
  advantagesElement!: HTMLElement | null;
  public totalCartAmount: number = 0;

  public advantages: AdvantagesType[] = [
    {
      title: 'Лучшие продукты',
      text: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.',
      digit: 1,
    },
    {
      title: 'Много вкусов',
      text: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.',
      digit: 1,
    },
    {
      title: 'Бисквитное тесто',
      text: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!',
      digit: 1,
    },
    {
      title: 'Честный продукт',
      text: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.',
      digit: 1,
    },
  ];


  public macaroonCard: ProductType[] = [
    {
      image: '',
      title: '',
      unit: 0,
      price: 0,
    }
  ];


  public formValues = {
    productTitle: '',
    name: '',
    phone: ''
  }
  constructor(private productService: ProductService, private cartService: CartService) {

  }

  ngOnInit(): void {
    this.macaroonCard = this.productService.getProduct();
    if (this.macaroons && this.orderElement && this.advantagesElement) {
      this.macaroons = document.querySelector('#macaroons');
      this.orderElement = document.querySelector('#orderElement');
      this.advantagesElement = document.querySelector('#advantagesElement');

    }

  }
  public toScroll(target: HTMLElement): void {
    target.scrollIntoView({ behavior: "smooth" });
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.cartService.count++;
    this.toScroll(target);
    this.formValues.productTitle = product.title.toUpperCase();
    this.totalCartAmount += product.price;  // Обновление общей суммы в корзине при добавлении товара
    alert(`${product.title} добавлен в корзину!`)

  }

  public createOrder(): void {
    if (!this.formValues.productTitle) {
      alert('Выберите макарун');
      return
    }
    if (!this.formValues.name) {
      alert('Напишите свое имя');
      return
    }
    if (!this.formValues.phone) {
      alert('Укажите телефон');
      return
    }
    alert('Спасибо за заказ')
  }
}
