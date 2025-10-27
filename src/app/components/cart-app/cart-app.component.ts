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
  styleUrl: './cart-app.component.css'
})
export class CartAppComponent implements OnInit{

  // Productos que muestra el catálogo.
  products: Product[] = [];

  // Los productos que hemos añadido al carrito.
  items: CartItem[] = [];

  constructor(private service: ProductService) {

  }
  // Cuando se inicializa la app rellenamos los datos que hay contenidos en data.ts en la variable products.
  ngOnInit(): void {
    this.products = this.service.findAll();
  }

}
