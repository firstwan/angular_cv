import { Component } from '@angular/core';
import { IntroductionComponent } from './introduction/introduction.component'
import { SkillsComponent } from '../skills/skills.component'
import { EmploymentsComponent } from '../employments/employments.component'
import { CertificatesComponent } from '../certificates/certificates.component';

@Component({
  selector: 'app-home',
  imports: [IntroductionComponent, SkillsComponent, EmploymentsComponent, CertificatesComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
}