import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-description',
  imports: [NgIf],
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.css'
})
export class ProductDescriptionComponent {
  @Input()
  productDescription : Product = {
    id: 1,
    name: "",
    price: 1,
    inStock: true,
    onSale: true,
    img: ""
  }

  isSelected: boolean = false;

  onSelect(){
    this.isSelected = !this.isSelected;
  }
}
