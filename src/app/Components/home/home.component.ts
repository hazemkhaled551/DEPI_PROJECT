import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-home',
  imports: [ButtonComponent, NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
