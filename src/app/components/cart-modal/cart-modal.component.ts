import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartItem } from '../../model/cartItem';

@Component({
  selector: 'app-cart-modal',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.css',
})
export class CartModalComponent {
  @Input() items: CartItem[] = [];
  @Input() total = 0;

  @Output() idProductEventEmitter = new EventEmitter();

  @Output() openEventEmitter = new EventEmitter();

  onDeleteCart(id: number) {
    this.idProductEventEmitter.emit(id);
  }

  // Emitimos al padre
  openCloseCart(): void {
    this.openEventEmitter.emit();
  }
}
