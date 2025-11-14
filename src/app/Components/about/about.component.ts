import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FeedbackComponent } from "../feedback/feedback.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FeedbackComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
}
