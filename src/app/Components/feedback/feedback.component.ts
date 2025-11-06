import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-feedback',
  imports: [CarouselModule, NgFor],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css',
})
export class FeedbackComponent {
  tests = [
    {
      name: 'Christine Beckam - Designer',
      test: 'Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.',
      image: '../../../assets/Ellipse 624.png',
    },
    {
      name: 'Christine Beckam - Designer',
      test: 'Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.',
      image: '../../../assets/Ellipse 624.png',
    },
    {
      name: 'Christine Beckam - Designer',
      test: 'Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.',
      image: '../../../assets/Ellipse 624.png',
    },
  ];

  customOptions = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    
    navText: [
      '<i class="fa fa-chevron-left"></i>', 
      '<i class="fa fa-chevron-right"></i>',
    ],
    items: 1,
  };
}
