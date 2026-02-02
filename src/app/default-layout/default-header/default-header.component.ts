import { Component, input, inject, signal, computed } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-default-header',
  imports: [
    RouterLink,
  ],
  templateUrl: './default-header.component.html',
  styleUrl: './default-header.component.scss',
})
export class DefaultHeaderComponent {

}
