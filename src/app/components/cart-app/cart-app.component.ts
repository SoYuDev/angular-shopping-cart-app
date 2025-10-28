import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product';
import { CatalogComponent } from '../catalog/catalog.component';
import { CartComponent } from '../cart/cart.component';
import { CartItem } from '../../model/cartItem';

@Component({
  selector: 'app-cart-app',
  standalone: true,
  imports: [CatalogComponent, CartComponent],
  templateUrl: './cart-app.component.html',
  styleUrl: './cart-app.component.css',
})
export class CartAppComponent implements OnInit {
  // Productos que muestra el catálogo.
  products: Product[] = [];

  // Los productos que hemos añadido al carrito.
  items: CartItem[] = [];

  constructor(private service: ProductService) {}
  // Cuando se inicializa la app rellenamos los datos que hay contenidos en data.ts en la variable products.
  ngOnInit(): void {
    this.products = this.service.findAll();
  }

  // Añadimos el producto a partir de los eventos de los componentes hijos product-card -> catalog -> cart-app
  onAddCart(product: Product): void {
    
    // ... this.items hace una copia de la instancia y además le añadimos el producto que nos viene por el argumento y la cantidad, que será 1 por defecto.
    // { product: {... product}, lo hacemos para pasar una nueva instancia a partir del product. Esto lo hacemos para que si cambiamos el producto
    // Del carro este no afecte al producto del catálogo. Simplemente es una decisión de diseño.
    this.items = [...this.items, { product: {... product}, quantity: 1 }];
  }
}
