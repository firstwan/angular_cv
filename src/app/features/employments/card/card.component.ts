import { Component, Input } from '@angular/core';
import { Employment } from '../employments.service';

@Component({
  selector: 'employment-card',
  imports: [],
  templateUrl: './card.component.html',
})
export class EmploymentCardComponent {
    @Input({required: true}) employmentData!: Employment;

    getEmploymentDuration() {
      let startDate = this.employmentData.startFrom.toLocaleString("en-sg", {
        year: 'numeric',
        month: 'long',
      });
      
      let endDate = "";
      if (this.employmentData.endDate instanceof Date) {
        endDate = this.employmentData.endDate.toLocaleString("en-sg", {
          year: 'numeric',
          month: 'long',
        });
      } else {
        endDate = "Present";
      }

      return startDate + " - " + endDate;
    }
}