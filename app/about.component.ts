

import { Component } from '@angular/core';

@Component({
  selector: 'about-home',
  template: `<h3>About Home</h3>`
})
export class AboutHomeComponent { }

@Component({
  selector: 'about-item',
  template: `<h3>About Item</h3>`
})
export class AboutItemComponent { }

@Component({
    selector: 'app-about',
    template: `
      <h2>About</h2>
      <a [routerLink]="['/about']">Home</a>
      <a [routerLink]="['/about/item']">Item</a>
      <div class="inner-outlet">
        <router-outlet></router-outlet>
      </div>
    `
})
export class AboutComponent1 { }


