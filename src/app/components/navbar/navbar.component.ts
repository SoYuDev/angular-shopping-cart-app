import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../model/cartItem';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input() items!: CartItem[];

  @Output() openEventEmitter = new EventEmitter();

  // Emitimos al padre
  openCloseCart(): void {
    this.openEventEmitter.emit();
  }
}
