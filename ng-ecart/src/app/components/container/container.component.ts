import { Component } from '@angular/core';

// interface Product {
//   name: string;
//   color: string;
//   price: number;
//   discount: number;
//   inStock: number;
//   img: string;
// }

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent {
  // name = 'H.Kabir';
  // addToCart: number = 0;
  // product: Product = {
  //   name: 'iPhone',
  //   color: 'Matt Black',
  //   price: 789,
  //   discount: 8.5,
  //   inStock: 10,
  //   img: 'assets/img/iphone14.png',
  // };
  // getDiscountPrice(): number {
  //   return (
  //     this.product.price - (this.product.price * this.product.discount) / 100
  //   );
  // }
  // onNameChange(e: any) {
  //   this.name = e.target.value;
  // }
  // changeCartValue(type: string) {
  //   if (type === 'inc' && this.addToCart < this.product.inStock)
  //     this.addToCart++;
  //   else if (type === 'dec' && this.addToCart > 0) this.addToCart--;
  // }
}
