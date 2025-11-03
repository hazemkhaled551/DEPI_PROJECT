import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-package-card',
  imports: [ CurrencyPipe , ButtonComponent],
  templateUrl: './package-card.component.html',
  styleUrl: './package-card.component.css'
})
export class PackageCardComponent {
  @Input() package: any

}
