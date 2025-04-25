import { Component, inject } from '@angular/core';
import { EmploymentsService } from '../employments.service';
import { EmploymentCardComponent } from '../card/card.component';

@Component({
  selector: 'employment-timeline',
  imports: [EmploymentCardComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class EmploymentTimelineComponent {
    private employmentService = inject(EmploymentsService)
    employmentData = this.employmentService.getAllEmployments();
}