import { Component, Input, OnInit } from '@angular/core';
import { AdvantagesType } from '../types/advantages.type';

@Component({
  selector: 'advantages-component',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {
  @Input() advantage!: AdvantagesType;
  @Input() i: number = 1;

  constructor() {
    this.advantage = {
      title: '',
      text: '',
      digit: 0
    }
  }


  ngOnInit(): void {
  }

}
