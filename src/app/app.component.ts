import { Component } from '@angular/core';
import { AdvantagesType } from './components/types/advantages.type';
import { ChangeMacaroonType } from './components/types/change-macaroon.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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


  public macaroonCard: ChangeMacaroonType[] = [
    {
      image: 'changeMac1.png',
      title: 'Макарун с малиной',
      unit: 1,
      price: 1.70,
      currency: ' ₽',
    },
    {
      image: 'changeMac2.png',
      title: 'Макарун с манго',
      unit: 1,
      price: 1.70,
      currency: ' ₽',
    },
    {
      image: 'changeMac3.png',
      title: 'Пирог с ванилью',
      unit: 1,
      price: 1.80,
      currency: ' ₽',
    },
    {
      image: 'changeMac4.png',
      title: 'Пирог с фисташками',
      unit: 1,
      price: 1.90,
      currency: ' ₽',
    },
  ];


  public formValues = {
    productTitle: '',
    name: '',
    phone: ''
  }

  public toScroll(traget: HTMLElement):void {
    traget.scrollIntoView({behavior: "smooth"});
  }

  public addToCart(target: HTMLElement, product: ChangeMacaroonType): void {
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
