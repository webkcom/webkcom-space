import { Component } from '@angular/core';

@Component({
  selector: 'app-error-404',
  template: `
  <div class="background">
  </div>
  `,
  styles: [
    `
      .background {
        background-image: url('../../../assets/images/404.svg');
        backgroun-size: cover;
        background-repeat:no-repeat;
        background-position:center;
        height: 800px;
      }
    `
  ]
})
export class Error404Component {}