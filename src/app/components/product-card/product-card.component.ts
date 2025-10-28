import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;

  @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter();

  // Emitimos el producto seleccionado al componente 'catalog'
  onAddCart(product: Product): void {
    this.productEventEmitter.emit(product);
  }
}
