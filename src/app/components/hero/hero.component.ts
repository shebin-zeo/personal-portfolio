import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  uptime = signal('99.999%');
  latency = signal('12ms');
  activeNodes = signal(42);
  
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      // Simulate live fluctuating metrics
      this.latency.set(`${Math.floor(Math.random() * 10) + 8}ms`);
      // Occasionally fluctuate nodes
      if (Math.random() > 0.8) {
        this.activeNodes.update(n => Math.random() > 0.5 ? n + 1 : n - 1);
      }
    }, 2000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
