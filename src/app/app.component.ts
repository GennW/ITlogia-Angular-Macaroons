import { Component, OnInit } from '@angular/core';
import { AdvantagesType } from './components/types/advantages.type';
import { ProductType } from './components/types/change-macaroon.type';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

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


  public macaroonCard: ProductType[] = [];


  public formValues = {
    productTitle: '',
    name: '',
    phone: ''
  }
  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.macaroonCard = this.productService.getProduct();
  }
  public toScroll(traget: HTMLElement): void {
    traget.scrollIntoView({ behavior: "smooth" });
  }

  public addToCart(target: HTMLElement, product: ProductType): void {
    this.toScroll(target);
    this.formValues.productTitle = product.title.toUpperCase();
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
