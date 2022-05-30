import { Component } from '@angular/core';

@Component({
  selector: 'app-error-500',
  template: `
  <div class="background">
  </div>
  `,
  styles: [
    `
      .background {
        backgroun-size: cover;
        background-repeat:no-repeat;
        background-position:center;
        height: 800px;
      }
    `
  ]
})
export class Error500Component {}