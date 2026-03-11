import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.css'
})
export class TerminalComponent {
  userInput = signal('');
  terminalOutput = signal<string[]>([
    'System initialized.',
    'Type "help" to view available commands.',
    ''
  ]);

  handleCommand(event: Event) {
    event.preventDefault();
    const command = this.userInput().trim().toLowerCase();
    
    // Add command to output
    this.terminalOutput.update(out => [...out, `<span class="text-saas-accent">➜</span> <span class="text-white">~</span> ${command}`]);

    if (!command) return;

    // Process command
    switch (command) {
      case 'help':
        this.terminalOutput.update(out => [...out, 
          'Available commands:',
          '  <span class="text-green-400">about</span>    - View developer profile matrix',
          '  <span class="text-green-400">skills</span>   - List technical competencies',
          '  <span class="text-green-400">clear</span>    - Clear terminal output'
        ]);
        break;
      case 'about':
        this.terminalOutput.update(out => [...out, 
          '<span class="text-gray-400">GET /api/v1/developer/profile HTTP/1.1</span>',
          '<span class="text-blue-400">Host:</span> <span class="text-white">localhost:8080</span>',
          '<span class="text-purple-400">HTTP/1.1 200 OK</span>',
          '{',
          '  <span class="text-blue-300">"name"</span>: <span class="text-green-400">"Mohamed Shebin T P"</span>,',
          '  <span class="text-blue-300">"status"</span>: <span class="text-green-400">"Active (Recently Joined)"</span>,',
          '  <span class="text-blue-300">"role"</span>: <span class="text-yellow-300">"Associate Software Developer"</span>,',
          '  <span class="text-blue-300">"expertise"</span>: [<span class="text-green-400">"Java"</span>, <span class="text-green-400">"Angular"</span>, <span class="text-green-400">"Spring Boot"</span>],',
          '  <span class="text-blue-300">"mission"</span>: <span class="text-yellow-300">"Contributing to scalable systems while rapidly expanding my technical skill set."</span>',
          '}'
        ]);
        break;
      case 'skills':
         this.terminalOutput.update(out => [...out, 
          '[██████████] 100% Core Java',
          '[█████████░]  90% Angular 17+',
          '[██████████] 100% Spring Boot',
          '[████████░░]  80% Docker/K8s'
        ]);
        break;
      case 'clear':
        this.terminalOutput.set([]);
        break;
      default:
        this.terminalOutput.update(out => [...out, `<span class="text-red-400">Command not found: ${command}. Type "help" for options.</span>`]);
    }

    // Reset input
    this.userInput.set('');
  }
}
