import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Title } from '@angular/platform-browser';
import { NgFor } from '@angular/common';
import { PackageCardComponent } from '../package-card/package-card.component';
import { FeedbackComponent } from "../feedback/feedback.component";

@Component({
  selector: 'app-home',
  imports: [ButtonComponent, NgFor, PackageCardComponent, FeedbackComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  packagesData: any = [
    {
      img: '../../../assets/card1.png',
      flag: '../../../assets/SWI.png',
      country: 'Europe',
      Title: 'Switzerland',
      pepoleGoing: '25',
      days: '8',
      price: '1200',
      DISC: '1000',
      description:
        'Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.',
    },
    {
      img: '../../../assets/card2.png',
      flag: '../../../assets/BRA.png',
      country: 'Brazil',
      Title: 'Amazon',
      pepoleGoing: '30',
      days: '8',
      price: '1200',
      DISC: '1000',
      description:
        'Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.',
    },
    {
      img: '../../../assets/card3.png',
      flag: '../../../assets/EGY.png',
      country: 'Egypt',
      Title: 'Giza',
      pepoleGoing: '155',
      days: '8',
      price: '1200',
      DISC: '1000',
      description:
        'Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.',
    },

  ];
}
