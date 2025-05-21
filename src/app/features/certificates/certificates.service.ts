import {Injectable} from '@angular/core';

export interface Certificate {
    name: string,
    expiredOn: Date,
    logoUrl: string | undefined,
}

@Injectable({
    providedIn: "root"
})
export class CertificatesService {
    protected CertificatesList: Certificate[] = [
        {
            name: "CompTIA Security+",
            expiredOn: new Date("2026-10-22"),
            logoUrl: 'images/comptia_security.png',
        }
    ];

    getAllCertificates(): Certificate[] {
        return this.CertificatesList;
    }
}