import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-cart-app',
  standalone: true,
  imports: [],
  templateUrl: './cart-app.component.html',
  styleUrl: './cart-app.component.css'
})
export class CartAppComponent implements OnInit{

  products: Product[] = [];

  constructor(private service: ProductService) {

  }
  // Cuando se inicializa la app rellenamos los datos que hay contenidos en data.ts en la variable products.
  ngOnInit(): void {
    this.products = this.service.findAll();
  }

}
