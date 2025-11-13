import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [ RouterLink, FormsModule ,NgFor],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // لما المستخدم يعمل scroll أكثر من 50px
    this.isScrolled = window.scrollY > 50;
  }
  destination1: string = '';
  destination2: string = '';
  startDate: string = '';
  guests: number = 2;
  guestOptions = [1, 2, 3, 4, 5];

  activities = [
    { name: 'Culture', selected: false },
    { name: 'Outdoors', selected: false },
    { name: 'Relaxing', selected: false },
    { name: 'Wildlife', selected: false },
    { name: 'Romantic', selected: false },
    { name: 'Religious', selected: false },
    { name: 'Hiking', selected: false },
    { name: 'Musical', selected: false },
    { name: 'Shopping', selected: false },
    { name: 'Business', selected: false },
    { name: 'Museums', selected: false },
    { name: 'Party', selected: false },
    { name: 'Traditions', selected: false },
    { name: 'Walks', selected: false },
    { name: 'Fishing', selected: false },
    { name: 'Cruise', selected: false },
    { name: 'Guide', selected: false },
    { name: 'Healthcare', selected: false },
    { name: 'Accommodation', selected: false },
  ];



  addDestination(event: Event) {
    event.preventDefault();
    // ممكن تضيف منطق لإضافة حقول إضافية إذا احتجت
    alert('Add destination clicked!');
  }

  buildPackage() {
    console.log({
      destination1: this.destination1,
      destination2: this.destination2,
      startDate: this.startDate,
      guests: this.guests,
      activities: this.activities.filter((a) => a.selected).map((a) => a.name),
    });
    alert('Package built! Check console.');
  }
}
