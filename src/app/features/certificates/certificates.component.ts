import { Component, inject } from '@angular/core';
import { CertificatesService } from './certificates.service';
import { CertificateCardComponent } from './card/card.component';

@Component({
  selector: 'app-certificates',
  imports: [CertificateCardComponent],
  templateUrl: './certificates.component.html',
})
export class CertificatesComponent {
    private certificateService = inject(CertificatesService);
    certificates = this.certificateService.getAllCertificates();
}