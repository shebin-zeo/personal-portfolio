import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Server, Database, Container, Cloud, Code2, Layers } from 'lucide-angular';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css'
})
export class TechStackComponent {
  Server = Server;
  Database = Database;
  Container = Container;
  Cloud = Cloud;
  Code2 = Code2;
  Layers = Layers;

  integrations = [
    { 
      name: 'Java / Spring Boot', 
      status: 'Connected', 
      description: 'Core microservices backend architecture.',
      icon: this.Server
    },
    { 
      name: 'Angular 17+', 
      status: 'Optimized', 
      description: 'Reactive standalone component frontend.',
      icon: this.Code2
    },
    { 
      name: 'Docker & K8s', 
      status: 'Running', 
      description: 'Containerized highly-available deployments.',
      icon: this.Container
    },
    { 
      name: 'PostgreSQL', 
      status: 'Synced', 
      description: 'Relational highly-structured data persistence.',
      icon: this.Database
    },
    { 
      name: 'Redis', 
      status: 'Live', 
      description: 'In-memory caching and message brokering.',
      icon: this.Layers
    },
    { 
      name: 'AWS Cloud', 
      status: 'Active', 
      description: 'Scalable cloud infrastructure provider.',
      icon: this.Cloud
    }
  ];
}
