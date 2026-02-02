import { Component, input, inject, signal, computed } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  HeaderComponent
} from '@coreui/angular';

@Component({
  selector: 'app-default-header',
  imports: [
    RouterLink,
    HeaderComponent,
  ],
  templateUrl: './default-header.component.html',
  styleUrl: './default-header.component.scss',
})
export class DefaultHeaderComponent extends HeaderComponent {

  constructor() {
    super();
  }

}
