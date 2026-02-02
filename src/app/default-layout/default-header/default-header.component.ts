import { Component, input, inject, signal, computed } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default-header',
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './default-header.component.html',
  styleUrl: './default-header.component.scss',
})
export class DefaultHeaderComponent {

}
