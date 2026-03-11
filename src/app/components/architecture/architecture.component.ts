import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-architecture',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './architecture.component.html',
  styleUrl: './architecture.component.css'
})
export class ArchitectureComponent {
  nodes = [
    { id: 'client', label: 'Angular Client', type: 'frontend', color: 'bg-red-500/20 text-red-400 border-red-500/50' },
    { id: 'gateway', label: 'Spring Cloud Gateway', type: 'gateway', color: 'bg-green-500/20 text-green-400 border-green-500/50' },
    { id: 'auth', label: 'Auth Service', type: 'microservice', color: 'bg-blue-500/20 text-blue-400 border-blue-500/50' },
    { id: 'billing', label: 'Billing Service', type: 'microservice', color: 'bg-purple-500/20 text-purple-400 border-purple-500/50' },
    { id: 'db', label: 'PostgreSQL Cluster', type: 'database', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50' }
  ];
}
