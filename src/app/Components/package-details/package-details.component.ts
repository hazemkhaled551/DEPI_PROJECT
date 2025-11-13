import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-package-details',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css','../tour-plan/tour-plan.component.css'],
})
export class PackageDetailsComponent {
  activeTab: string = 'information';
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }


}
