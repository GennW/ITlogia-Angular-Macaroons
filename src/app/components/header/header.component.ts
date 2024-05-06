import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  phoneNumber = '375293689868';
  formattedPhoneNumber: string;
  constructor() {
    this.formattedPhoneNumber = this.formatPhoneNumber(this.phoneNumber);
   }

   private formatPhoneNumber(phoneNumber: string): string {
    // Удалить пробелы, скобки и любые другие символы, оставив только цифры
    return phoneNumber.replace(/\D/g, '');
  }
  ngOnInit(): void {
  }

  public toScroll(traget: HTMLElement):void {
    traget.scrollIntoView({behavior: "smooth"});
  }
}
