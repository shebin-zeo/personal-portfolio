import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hiring-tiers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hiring-tiers.component.html',
  styleUrl: './hiring-tiers.component.css'
})
export class HiringTiersComponent {
  tiers = [
    {
      name: 'Learning / Open Source',
      price: 'Free',
      period: 'Forever',
      description: 'Active contributions to community projects and open-source tools.',
      features: [
        'Bug fixes and issue triaging',
        'Writing documentation',
        'Learning new frameworks',
        'Participating in code reviews'
      ],
      cta: 'View GitHub Activity',
      highlighted: false
    },
    {
      name: 'Full-Time Role',
      price: 'Standard',
      period: 'annually',
      description: 'Dedicated team member ready to tackle tickets and grow.',
      features: [
        'Writing clean, tested code',
        'Collaborating with senior engineers',
        'Agile / Scrum participation',
        'Continuous learning & certifications',
        'Building full-stack features'
      ],
      cta: 'Hire Me',
      highlighted: true
    },
    {
      name: 'Contract / Freelance',
      price: 'Hourly',
      period: 'per project',
      description: 'Available for smaller projects, bug fixes, or UI tasks.',
      features: [
        'Component development',
        'API integration',
        'Responsive UI implementation',
        'Unit testing',
        'Rapid prototyping'
      ],
      cta: 'Discuss Project',
      highlighted: false
    }
  ];
}
