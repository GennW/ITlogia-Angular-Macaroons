import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductType } from '../types/change-macaroon.type';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  showPresent = true;
  VkLink = 'https://www.vk.ru';
  @Input() macaroon: ProductType;
  phoneNumber = '375293689869';
  formattedPhoneNumber: string;

  constructor(public cartService: CartService) { 
    this.formattedPhoneNumber = this.formatPhoneNumber(this.phoneNumber);
    this.macaroon = {
      image: '',
      title: '',
      unit: 0,
      price: 0,
    }
    
  }
  private formatPhoneNumber(phoneNumber: string): string {
    // Удалить пробелы, скобки и любые другие символы, оставив только цифры
    return phoneNumber.replace(/\D/g, '');
  }
  ngOnInit(): void {
  }

}
