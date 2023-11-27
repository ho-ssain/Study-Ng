import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      brand: 'Random Brand',
      gender: 'Unisex',
      category: 'Random Category',
      size: [7, 8, 9, 10],
      color: ['black', 'red', 'green'],
      price: 42,
      is_in_inventory: 8,
      items_left: 5,
      image_url: 'https://picsum.photos/200/300?random=1',
      slug: 'product-1',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      brand: 'Random Brand',
      gender: 'Unisex',
      category: 'Random Category',
      size: [7, 8, 9, 10],
      color: ['black', 'red', 'green'],
      price: 78,
      is_in_inventory: 2,
      items_left: 7,
      image_url: 'https://picsum.photos/200/300?random=2',
      slug: 'product-2',
    },
    {
      id: 3,
      name: 'Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      brand: 'Random Brand',
      gender: 'Unisex',
      category: 'Random Category',
      size: [7, 8, 9, 10],
      color: ['black', 'red', 'green'],
      price: 78,
      is_in_inventory: 2,
      items_left: 7,
      image_url: 'https://picsum.photos/200/300?random=3',
      slug: 'product-2',
    },
    {
      id: 4,
      name: 'Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      brand: 'Random Brand',
      gender: 'Unisex',
      category: 'Random Category',
      size: [7, 8, 9, 10],
      color: ['black', 'red', 'green'],
      price: 78,
      is_in_inventory: 2,
      items_left: 7,
      image_url: 'https://picsum.photos/200/300?random=4',
      slug: 'product-2',
    },
    {
      id: 5,
      name: 'Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      brand: 'Random Brand',
      gender: 'Unisex',
      category: 'Random Category',
      size: [7, 8, 9, 10],
      color: ['black', 'red', 'green'],
      price: 78,
      dis_price: 28,
      is_in_inventory: 2,
      items_left: 7,
      image_url: 'https://picsum.photos/200/300?random=5',
      slug: 'product-2',
    },
    {
      id: 6,
      name: 'Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      brand: 'Random Brand',
      gender: 'Unisex',
      category: 'Random Category',
      size: [7, 8, 9, 10],
      color: ['black', 'red', 'green'],
      price: 78,
      dis_price: 38,
      is_in_inventory: 2,
      items_left: 7,
      image_url: 'https://picsum.photos/200/300?random=6',
      slug: 'product-2',
    },
    {
      id: 7,
      name: 'Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      brand: 'Random Brand',
      gender: 'Unisex',
      category: 'Random Category',
      size: [7, 8, 9, 10],
      color: ['black', 'red', 'green'],
      price: 78,
      is_in_inventory: 2,
      items_left: 7,
      image_url: 'https://picsum.photos/200/300?random=7',
      slug: 'product-2',
    },
    {
      id: 8,
      name: 'Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      brand: 'Random Brand',
      gender: 'Unisex',
      category: 'Random Category',
      size: [7, 8, 9, 10],
      color: ['black', 'red', 'green'],
      price: 78,
      is_in_inventory: 2,
      items_left: 7,
      image_url: 'https://picsum.photos/200/300?random=8',
      slug: 'product-2',
    },
    {
      id: 9,
      name: 'Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      brand: 'Random Brand',
      gender: 'Unisex',
      category: 'Random Category',
      size: [7, 8, 9, 10],
      color: ['black', 'red', 'green'],
      price: 78,
      is_in_inventory: 2,
      items_left: 7,
      image_url: 'https://picsum.photos/200/300?random=9',
      slug: 'product-2',
    },

    {
      id: 10,
      name: 'Product 30',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      brand: 'Random Brand',
      gender: 'Unisex',
      category: 'Random Category',
      size: [7, 8, 9, 10],
      color: ['black', 'red', 'green'],
      price: 15,
      is_in_inventory: 4,
      items_left: 9,
      image_url: 'https://picsum.photos/200/300?random=10',
      slug: 'product-30',
    },
  ];
}