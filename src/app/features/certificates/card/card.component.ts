import { Component, Input } from '@angular/core';
import { Certificate } from '../certificates.service';

@Component({
  selector: 'certificate-card',
  imports: [],
  templateUrl: './card.component.html',
})
export class CertificateCardComponent {
  @Input({ required: true}) certificateData!: Certificate;

  getExpireDate() {
    return this.certificateData.expiredOn.toLocaleString("en-sg", {
      year: 'numeric',
      month: 'long',
    });
  }
}