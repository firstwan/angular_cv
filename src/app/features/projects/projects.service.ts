import {Injectable} from '@angular/core';
import { Skill, TechCategory } from '../skills/skills.service';

export interface Project {
    name: string,
    description: string,
    techStack: Skill,
    githubUrl: string | undefined
}

@Injectable({
    providedIn: "root"
})
export class ProjectsService {
    protected ProjectsList: Project[] = [
        {
            name: "My personal portfolio",
            description: 
                "A personal portfolio built with Angular and Tailwind CSS to showcase my skills, experience, and projects.<br/>" +
                `The application features a modular architecture with reusable components, smooth navigation via a sticky header, and responsive design.
                It highlights sections such as Projects, Skills, and Experience. Includes clean code practices and semantic markup.<br/>` +
                "This project demonstrates my ability to build production-ready front-end applications with component-based frameworks and modern UI design."
            ,
            techStack: {
                name: "Angular",
                iconName: "",
                type: TechCategory.BackendFramework
            },
            githubUrl: "https://github.com/firstwan/firstwan.github.io"
        }
    ];

    getAllProjects(): Project[] {
        return this.ProjectsList;
    }
}