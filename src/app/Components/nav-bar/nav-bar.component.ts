import { Component, HostListener } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-nav-bar',
  imports: [ButtonComponent],
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
}
