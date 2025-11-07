import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingFormComponent } from '../booking-form/booking-form.component';

@Component({
  selector: 'app-tour-plan',
  imports: [CommonModule, BookingFormComponent],
  templateUrl: './tour-plan.component.html',
  styleUrl: './tour-plan.component.css',
})
export class TourPlanComponent {
  tourDays = [
    {
      day: '01',
      title: 'Day 1: Departure',
      description:
        'Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et Voluptates Officia Sed Molestiae Sint Et Voluptas Quia. Qui Itorum Repudiandae Dolorum Deborem.',
      amenities: [
        { icon: 'star', text: '5 Star Accommodation' },
        { icon: 'star', text: '5 Star Accommodation' },
        { icon: 'breakfast', text: 'Breakfast' },
      ],
    },
    {
      day: '02',
      title: 'Day 2: Visiting Zurich, Geneva And Zermatt',
      description:
        'Donec Quam Felis, Ultricies Nec, Pellentesque Eu, Pretium Quis, Sem. Nulla Consequat Massa Quis Enim. Donec Pede Justo, Fringilla Vel, Aliquet Nec, Vulputate Eget, Arcu. In Enim Justo, Rhoncus Ut, Imperdiet.',
      amenities: [
        { icon: 'star', text: '5 Star Accommodation' },
        { icon: 'breakfast', text: 'Breakfast' },
        { icon: 'star', text: '5 Star Accommodation' },
        { icon: 'breakfast', text: 'Breakfast' },
      ],
    },
    {
      day: '03',
      title: 'Day 3: Rest',
      description:
        'Donec Quam Felis, Ultricies Nec, Pellentesque Eu, Pretium Quis, Sem. Nulla Consequat Massa Quis Enim. Donec Pede Justo, Fringilla Vel, Aliquet Nec, Vulputate Eget, Arcu. In Enim Justo, Rhoncus Ut, Imperdiet.',
      amenities: [
        { icon: 'star', text: '5 Star Accommodation' },
        { icon: 'breakfast', text: 'Breakfast' },
      ],
    },
    {
      day: '04',
      title: 'Day 4: Historical Tour',
      description:
        'Donec Quam Felis, Ultricies Nec, Pellentesque Eu, Pretium Quis, Sem. Nulla Consequat Massa Quis Enim. Donec Pede Justo, Fringilla Vel, Aliquet Nec, Vulputate Eget, Arcu. In Enim Justo, Rhoncus Ut, Imperdiet.',
      amenities: [
        { icon: 'star', text: '5 Star Accommodation' },
        { icon: 'breakfast', text: 'Breakfast' },
        { icon: 'star', text: '5 Star Accommodation' },
        { icon: 'breakfast', text: 'Breakfast' },
      ],
    },
    {
      day: '05',
      title: 'Day 5: Return',
      description:
        'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
    },
  ];

  onFormSubmit(formData: any) {
    console.log('Form submitted:', formData);
  }
}
