import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() ctaLabel = 'View Courses';
  @Input() ctaLink = '/';
  @Input() ctaFragment?: string;
}
