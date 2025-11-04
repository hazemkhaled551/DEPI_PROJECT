import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  cards = [
    {
      image: '/assets/product/switzerland.jpg',
      title: 'Switzerland',
      desc: 'Explore the Alps and Swiss lakes.',
      price: '$1,000',
    },
    {
      image: '/assets/product/berlin.jpg',
      title: 'Berlin',
      desc: 'Discover Germany’s historic capital.',
      price: '$850',
    },
    {
      image: '/assets/product/maldives.jpg',
      title: 'Maldives',
      desc: 'Tropical paradise and luxury resorts.',
      price: '$2,400',
    },
    {
      image: '/assets/product/baku.jpg',
      title: 'Baku',
      desc: 'Modern city by the Caspian Sea.',
      price: '$1,450',
    },
    {
      image: '/assets/product/chinese.jpg',
      title: 'Chinese',
      desc: 'Experience the Great Wall and culture.',
      price: '$800',
    },
  ];
  ngAfterViewInit() {
  // بعد تحميل الصفحة، نتحقق من كل الصور
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    img.addEventListener('error', () => {
      console.warn(`⚠️ الصورة غير موجودة أو اسمها خطأ: ${img.getAttribute('src')}`);
    });
  });
}

}
