import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products = [
    { title: 'Switzerland', description: 'Explore the Alps and Swiss lakes.', price: 1000, image: 'assets/product/switzerland.jpg' },
    { title: 'Berlin', description: 'Discover Germany’s historic capital.', price: 850, image: 'assets/product/berlin.jpg' },
    { title: 'Maldives', description: 'Tropical paradise and luxury resorts.', price: 2400, image: 'assets/product/maldives.jpg' },
    { title: 'Toronto', description: 'Modern city with culture and nightlife.', price: 2200, image: 'assets/product/toronto.jpg' },
    { title: 'Baku', description: 'Old meets new in Azerbaijan’s capital.', price: 1400, image: 'assets/product/baku.jpg' },
    { title: 'Chinese', description: 'Walk through history on the Great Wall.', price: 1800, image: 'assets/product/chinese.jpg' },
  ];

  searchTerm = '';
  priceRange = 2500;
  selectedDate = '';

  filterProducts() {
    console.log('Filtering...');
  }
}
