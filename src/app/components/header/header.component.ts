import { Component, Input, OnInit } from '@angular/core';
import { fadeInUpOnEnterAnimation, bounceOutDownOnLeaveAnimation } from 'angular-animations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    fadeInUpOnEnterAnimation({ anchor: 'enter', duration: 1000, delay: 100, translate: '30px' }),
    bounceOutDownOnLeaveAnimation({ anchor: 'leave', duration: 500, delay: 200, translate: '40px' })
  ]
})
export class HeaderComponent implements OnInit {
  @Input() title: string = '';
  @Input() width: string = '200px';
  hover: boolean;
  constructor() { }

  ngOnInit(): void {
    this.hover = false;
  }

  mouseEnter() {
    this.hover = true;
  }
  mouseLeave() {
    this.hover = false;
  }
}
