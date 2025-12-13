import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing ProjectCard component
import { ProjectCard } from '../../shared/project-card/project-card';

// Importing Project interface
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-profile',
  imports: [ProjectCard, CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  projects: Project[] = [
    { image: 'assets/project1.jpg', title: 'Alpha', description: 'Project Alpha', participants: 3 },
    { image: 'assets/project2.jpg', title: 'Beta', description: 'Project Beta', participants: 1 },
    { image: 'assets/project3.jpg', title: 'Gamma', description: 'Project Gamma', participants: 5 },
  ];
}
