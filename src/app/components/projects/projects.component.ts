import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Health App Dashboard',
      version: 'v1.0.2',
      description: 'Contributed to the frontend dashboard using Angular 17. Implemented patient record views and integrated RESTful APIs provided by the Java backend.',
      metrics: [
        { label: 'Components Built', value: '15+', trend: 'up' },
        { label: 'Test Coverage', value: '85%', trend: 'up' },
        { label: 'UI Speed Index', value: '1.2s', trend: 'down' }
      ],
      tags: ['Angular', 'Typescript', 'REST APIs']
    },
    {
      name: 'Task Manager Microservice',
      version: 'v0.9.0',
      description: 'Built a Spring Boot microservice for managing user tasks. Containerized the application using Docker and wrote comprehensive unit tests.',
      metrics: [
        { label: 'Endpoints', value: '12', trend: 'up' },
        { label: 'Query Time', value: '< 20ms', trend: 'down' },
        { label: 'Containerized', value: 'Yes', trend: 'neutral' }
      ],
      tags: ['Spring Boot', 'Java', 'Docker']
    }
  ];
}
