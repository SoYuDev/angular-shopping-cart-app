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
    // Comprobamos si el producto que estamos añadiendo existe ya en nuestro atributo items.
    // El valor de hasItem será o de tipo CartItem si se cumple la condición o undefined
    const hasItem = this.items.find((item) => {
      return item.product.id === product.id;
    });

    // Manera simplificada de poner la función callback.
    // const hasItem = this.items.find(item => item.product.id === product.id);

    // ... this.items hace una copia de la instancia y además le añadimos el producto que nos viene por el argumento y la cantidad, que será 1 por defecto.
    // { product: {... product}, lo hacemos para pasar una nueva instancia a partir del product. Esto lo hacemos para que si cambiamos el producto
    // Del carro este no afecte al producto del catálogo. Simplemente es una decisión de diseño.
    if (hasItem) {
      // .map devuelve una nueva instancia de los items pero modificando el item, en este caso modificamos la cantidad.
      this.items = this.items.map((item) => {
        if (item.product.id === product.id) {
          return {
            ... item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    } else {
      this.items = [...this.items, { product: { ...product }, quantity: 1 }];
    }
  }
}
