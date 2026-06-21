import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ProductGroup {
  title: string;
  description: string;
  items: string[];
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  productGroups: ProductGroup[] = [
    {
      title: 'Fire Equipment',
      description: 'Core fire response and suppression products for workplaces, buildings, and industrial sites.',
      items: ['Fire extinguishers', 'Fire hose reels', 'Fire hydrants', 'Fire blankets', 'Cabinets', 'Lay flat hose']
    },
    {
      title: 'Detection And Safety Support',
      description: 'Products that support early warning, first response, and general site readiness.',
      items: ['Smoke detectors', 'First aid kits', 'Vehicle brackets']
    },
    {
      title: 'Site Signage And Ancillary Supply',
      description: 'Supporting items used to improve visibility, compliance, and practical installation coverage.',
      items: ['Variety of symbolic signs', 'Plumbing']
    }
  ];

  relatedServices = [
    'Fire equipment sales and maintenance',
    'Fire risk assessment',
    'Basic fire training',
    'Alarm and detection systems',
    'Fire proofing'
  ];
}
