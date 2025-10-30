import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CartItem } from '../../model/cartItem';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnChanges {
  @Input() items: CartItem[] = [];

  @Output() idProductEventEmitter = new EventEmitter();

  total: number = 0;

  // Se llama a este método cuando el componente sufre un cambio (añadir/borrar elemento carro...)
  ngOnChanges(changes: SimpleChanges): void {
    this.calculateTotal();
    this.saveSession();
  }

  onDeleteCart(id: number) {
    this.idProductEventEmitter.emit(id);
  }

  calculateTotal(): void {
    this.total = this.items.reduce(
      (accumulator, item) => accumulator + item.quantity * item.product.price,
      0
    );
  }

  // Función para guardar la información en la sesión HTTP. (No perder el carrito cuando refresquemos la página)
  saveSession(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }
}
