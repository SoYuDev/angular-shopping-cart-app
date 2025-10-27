import { Component, Input } from '@angular/core';
import { Product } from '../../model/product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {

  @Input() products!: Product[];

}
