import {Injectable} from '@angular/core';

export interface Employment {
    id: number,
    startFrom: Date,
    endDate: Date | string,
    title: string,
    companyName: string,
    companyLocation: string,
    responsibility: string[],
    achievements: string[] | null | undefined
}

@Injectable({
    providedIn: "root"
})
export class EmploymentsService {
    protected EmploymentsList: Employment[] = [
        {
            id: 1,
            startFrom: new Date("2022-07-01"),
            endDate: new Date("2025-03-31"),
            title: "Senior Software Engineer",
            companyName: "Kraken IT Pte Ltd",
            companyLocation: "Singapore",
            responsibility: [
                "Design and develop database and API functions related to the content management system and discover the format of data that is present on the front end.",
                "Gather and analyze client’s feedback and requirements, suggest solutions, and provide development timeline. Create tickets and distribute them to other developers."
            ],
            achievements: [
                "Implementing a logging mechanism that allowed the team to track and resolve issues improved 80% team performance.",
                "Identifi ed longer processing time caused by all transactions processed by a single message queue. Separate transactions based on currency improved by more than 70% performance."
            ]
        },
        {
            id: 2,
            startFrom: new Date("2021-02-01"),
            endDate: new Date("2022-05-31"),
            title: "Web Developer",
            companyName: "Digifi v Solution Sdn Bhd",
            companyLocation: "Malaysia",
            responsibility: [
                "Design and develop software architecture related to B2B e-commerce web applications.",
                "Co-worked with cross-function team to coordinate and solve product quality issues, including DB structure discussion, product quantity insufficient issue, etc.",
                "Set up the development environment such as GitHub branching strategy, deployment standards, coding standards, etc, to ensure clean and maintainable code."
            ],
            achievements: [
                "Create an API template that included necessary packages eliminated redundant setup efforts and reduced the time needed to spin up new API services by at least 70%.",
                "Lead a team of 4 developers on software development, providing guidance, mentorship, and driving decision-making throughout the project life cycle.",
            ]
        },
        {
            id: 3,
            startFrom: new Date("2019-06-01"),
            endDate: new Date("2020-10-31"),
            title: "Software Engineer",
            companyName: "Maja Solution Sdn Bhd",
            companyLocation: "Malaysia",
            responsibility: [
                "Design and develop a Payment Gateway Aggregator service that integrates multiple payment gateway providers and offers payment services to various merchants.",
                "Responsible for 24/7 standby support to resolve critical production issues.",
            ],
            achievements: [
                "Delivered Payment Gateway Aggregator System within 2.5 months.",
                "Migrate a resource-intensive data analysis process to Python automation script, improving system performance by at least 70%.",
            ]
        },
        {
            id: 4,
            startFrom: new Date("2017-02-01"),
            endDate: new Date("2019-02-28"),
            title: "Software Engineer",
            companyName: "Nettium Sdn Bhd",
            companyLocation: "Malaysia",
            responsibility: [
                "Coordinated and communicated with multiple teams to handle cross-functional tasks, often without additional support from other team members.",
                "Responsible for maintaining and enhancing a legacy payment system built on ASP.NET.",
            ],
            achievements: null
        }
    ];

    getAllEmployments(): Employment[] {
        return this.EmploymentsList;
    }
}