import { Component, HostListener } from '@angular/core';
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
    {
      title: 'Switzerland',
      description: 'Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et.',
      price: 1100,
      rating: 5.0,
      date: '7',
      month: 'September 2025',
      people: 5,
      image: 'assets/product/switzerland.jpg'
    },
    {
      title: 'Berlin',
      description: 'Explore historic Germany with culture and life.',
      price: 850,
      rating: 4.8,
      date: '14',
      month: 'October 2025',
      people: 3,
      image: 'assets/product/berlin.jpg'
    },
    {
      title: 'Maldives',
      description: 'Tropical paradise and luxury resorts.',
      price: 2400,
      rating: 4.9,
      date: '20',
      month: 'November 2025',
      people: 2,
      image: 'assets/product/maldives.jpg'
    },
    {
      title: 'Toronto',
      description: 'Modern city with vibrant nightlife.',
      price: 2100,
      rating: 4.7,
      date: '3',
      month: 'December 2025',
      people: 4,
      image: 'assets/product/toronto.jpg'
    },
    {
      title: 'Baku',
      description: 'Old meets new in Azerbaijan’s capital.',
      price: 1400,
      rating: 4.5,
      date: '9',
      month: 'August 2025',
      people: 3,
      image: 'assets/product/baku.jpg'
    },
    {
      title: 'Chinese',
      description: 'Walk through history on the Great Wall.',
      price: 1800,
      rating: 4.6,
      date: '12',
      month: 'July 2025',
      people: 6,
      image: 'assets/product/chinese.jpg'
    }
  ];

  filteredProducts = [...this.products];
  searchTerm = '';
  priceRange = 2500;
  selectedDate = '';
  isMobile = false;

  // ✅ المتغيرات الجديدة لتجنب الأخطاء
  destination: string = '';
  minPrice: number = 0;

  ngOnInit() {
    this.updateLayout();
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesPrice = p.price >= this.minPrice && p.price <= this.priceRange;
      const matchesDate = this.selectedDate ? p.date === this.selectedDate : true;
      const matchesDestination = this.destination
        ? p.title.toLowerCase().includes(this.destination.toLowerCase())
        : true;
      return matchesSearch && matchesPrice && matchesDate && matchesDestination;
    });

    if (this.isMobile) {
      this.filteredProducts = this.filteredProducts.slice(0, 1);
    }
  }

  sortBy(option: string) {
    switch (option) {
      case 'low':
        this.filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'high':
        this.filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'az':
        this.filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'date':
        this.filteredProducts.sort((a, b) => parseInt(a.date) - parseInt(b.date));
        break;
      default:
        this.filteredProducts = [...this.products];
    }

    if (this.isMobile) {
      this.filteredProducts = this.filteredProducts.slice(0, 1);
    }
  }

  @HostListener('window:resize', [])
  onResize() {
    this.updateLayout();
  }

  updateLayout() {
    this.isMobile = window.innerWidth <= 768;
    if (this.isMobile) {
      this.filteredProducts = this.products.slice(0, 1);
    } else {
      this.filteredProducts = [...this.products];
    }
  }
}
