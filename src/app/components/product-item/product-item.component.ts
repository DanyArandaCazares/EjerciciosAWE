import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [NgClass],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Output()
  showProductEvent = new EventEmitter<number>();

  @Input()
  product : Product = {
      id: 1,
      name: "",
      price: 1,
      inStock: true,
      onSale: true,
      img: ""
    }

  showProduct(){
    this.showProductEvent.emit(this.product.id);
  }
}
