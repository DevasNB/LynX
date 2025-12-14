import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input() id!: number;
  @Input() image!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() participants: number = 1;

  constructor(private readonly router: Router) { }

  openProject() {
    this.router.navigate(['/projects', this.id]);
  }
}
