import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { simpleGithub } from '@ng-icons/simple-icons'

@Component({
  selector: 'app-navbar',
  imports: [NgIcon],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NarbarComponent {
  githubUrl = "https://github.com/firstwan/firstwan.github.io";
  githubIcon = simpleGithub;
}