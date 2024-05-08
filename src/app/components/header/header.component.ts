import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() macaroons!: HTMLElement;
  @Input() orderElement!: HTMLElement;
  @Input() advantagesElement!: HTMLElement;

  phoneNumber = '375293689868';
  formattedPhoneNumber: string;
  constructor(private scroller: ViewportScroller) {
    this.formattedPhoneNumber = this.formatPhoneNumber(this.phoneNumber);
   }

   private formatPhoneNumber(phoneNumber: string): string {
    // Удалить пробелы, скобки и любые другие символы, оставив только цифры
    return phoneNumber.replace(/\D/g, '');
  }
  ngOnInit(): void {
  }

  public toScroll(ancor: string):void {
    this.scroller.scrollToAnchor(ancor);
  }
}
