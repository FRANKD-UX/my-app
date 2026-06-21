import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  objectives = [
    'Render fire safety and training services to both private and public sector clients with consistent professional standards.',
    'Prioritise life safety, regulatory compliance, and practical workplace readiness in every project and training session.',
    'Maintain a reputation for quality work in a competitive industry where there is no room for mediocre execution.',
    'Build long-term growth through trust, repeat business, and client referrals.'
  ];

  strengths = [
    'Accredited workplace safety training',
    'On-site delivery across South Africa',
    'Fire equipment support and risk assessment services',
    'Documentation aligned with compliance requirements'
  ];

  sectors = ['Warehousing', 'Construction', 'Manufacturing', 'Commercial buildings', 'Public sector sites'];
}
