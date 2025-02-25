import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductDescriptionComponent } from "./components/product-description/product-description.component";
import { Product } from './interfaces/product.interface';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ProductItemComponent, ProductDescriptionComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shopping-system';

  products : Product[] = [
    { id: 1, name: 'Laptop', price: 1500, inStock: true, onSale: false, img:'https://www.grupocva.com/detalle_articulo/10425136.jpg' },
    { id: 2, name: 'Smartphone', price: 800, inStock: true, onSale: true, img: 'https://globaloffice.com.mx/img/CT/xiaomi20redmi20note201120blue-200.jpg'},
    { id: 3, name: 'Tablet', price: 400, inStock: false, onSale: false, img: 'https://www.grupocva.com/detalle_articulo/10419452.jpg'},
    { id: 4, name: 'Monitor', price: 200, inStock: true, onSale: true, img: 'https://i.blogs.es/b372f9/artboard/200_200.jpg'},
    { id: 5, name: 'Teclado mecánico', price: 100, inStock: true, onSale: false, img: 'https://www.grupocva.com/detalle_articulo/10152789.jpg'},
    { id: 6, name: 'Mouse inalámbrico', price: 50, inStock: false, onSale: false, img: 'https://images.verbatim.com/includes/binary_details.php?show=1&id=241912'},
    { id: 7, name: 'Impresora láser', price: 250, inStock: true, onSale: true, img: 'https://www.grupocva.com/detalle_articulo/10431301.jpg'},
    { id: 8, name: 'Auriculares Bluetooth', price: 120, inStock: true, onSale: false, img:'https://compuviper.mx/tienda/wp-content/uploads/2023/12/Audifonos-bluetooth-tipo-diadema-on-ear-panasonic-rb-hf520bpuk-color-negro-funcion-manos-libresmicrofono-50-horas-de-reproduccion-continua-ultralivianos.jpg'},
    { id: 9, name: 'Silla ergonómica', price: 300, inStock: false, onSale: true, img:'https://www.svenska.com.mx/cdn/shop/products/10388612_fe3ddd93-7f41-4996-892a-c4e4bc042c9d.jpg?v=1734119180'},
    { id: 10, name: 'Micrófono profesional', price: 180, inStock: true, onSale: false, img:'https://www.zegucom.com.mx/productos/MIC-1058/miniatura/webp/img_2.webp'},
    { id: 11, name: 'Disco SSD 1TB', price: 220, inStock: true, onSale: true, img: 'https://www.grupocva.com/detalle_articulo/10107563.jpg'},
    { id: 12, name: 'Cámara web 1080p', price: 90, inStock: true, onSale: false, img: 'https://www.grupocva.com/detalle_articulo/10310013.jpg'},
    { id: 13, name: 'Router Wi-Fi 6', price: 160, inStock: false, onSale: true, img: 'https://compuviper.mx/tienda/wp-content/uploads/2024/05/Router-dahua-dh-ax15m-router-inalambrico-2.4ghz5-ghz-6ta-generacion-wifi-dahua-dh-ax15m-ax1500-4-antenas.jpg'},
    { id: 14, name: 'Tarjeta gráfica RTX 4060', price: 500, inStock: true, onSale: false, img: 'https://www.grupocva.com/detalle_articulo/10390092.jpg'},
    { id: 15, name: 'Smartwatch', price: 250, inStock: true, onSale: true, img: 'https://www.grupocva.com/detalle_articulo/10394392.jpg'},
  ]

  selectedProduct: Product | null = null;

  getSelectedProduct(productId : number){
    this.selectedProduct = this.products.find(p => p.id === productId) || null;
  }
}
