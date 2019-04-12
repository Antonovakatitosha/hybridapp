import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="main-container">
    <router-outlet></router-outlet>
    <div ui-view></div>
    </div>
  `
})
export class AppComponent {
}
