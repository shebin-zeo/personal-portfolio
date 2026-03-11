import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeroComponent } from './components/hero/hero.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ArchitectureComponent } from './components/architecture/architecture.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { HiringTiersComponent } from './components/hiring-tiers/hiring-tiers.component';
import { PlaygroundComponent } from './components/playground/playground.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    HeroComponent,
    TechStackComponent,
    ArchitectureComponent,
    ProjectsComponent,
    TerminalComponent,
    HiringTiersComponent,
    PlaygroundComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'saas-portfolio';
  currentYear = new Date().getFullYear();
}
