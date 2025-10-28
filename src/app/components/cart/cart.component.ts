import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../model/cartItem';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  @Input() items: CartItem[] = [];

  @Output() idProductEventEmitter = new EventEmitter()

  onDeleteCart(id: number) {
    this.idProductEventEmitter.emit(id);
  }

}
