import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  showPresent = true;
  VkLink = 'https://www.vk.ru';

  constructor() { }

  ngOnInit(): void {
  }

}
