import {Injectable} from '@angular/core';
import { 
    simpleDotnet, simplePhp, simpleLaravel,
    simplePython, simpleVuedotjs, simpleAngular,
    simpleNextdotjs, simpleTypescript,
    simpleJavascript, simplePostgresql, simpleMysql,
    simpleMongodb, simpleDocker, simpleKubernetes,
    simpleAmazonwebservices, simpleGithub, simpleJenkins
} from '@ng-icons/simple-icons';
import { diAzurePlain, diCsharpPlain, diMicrosoftsqlserverPlain } from '@ng-icons/devicon/plain'

export interface Skill {
    name: string,
    iconName: string | undefined,
    type: TechCategory
}

export enum TechCategory {
    ProgramingLanguage,
    BackendFramework,
    FrontendFramework,
    Database,
    Tools,
}

@Injectable({
    providedIn: "root"
})
export class SkillsService {
    private skills: Skill[] = [
        {
            name: ".Net Core",
            iconName: simpleDotnet,
            type: TechCategory.BackendFramework,
        },
        {
            name: "C#",
            iconName: diCsharpPlain,
            type: TechCategory.ProgramingLanguage,
        },
        {
            name: "PHP",
            iconName: simplePhp,
            type: TechCategory.ProgramingLanguage,
        },
        {
            name: "Laravel",
            iconName: simpleLaravel,
            type: TechCategory.BackendFramework,

        },
        {
            name: "Python",
            iconName: simplePython,
            type: TechCategory.ProgramingLanguage,
        },
        {
            name: "Vue.js",
            iconName: simpleVuedotjs,
            type: TechCategory.FrontendFramework,
        },
        {
            name: "Angular",
            iconName: simpleAngular,
            type: TechCategory.FrontendFramework,
        },
        {
            name: "Nuxt.js",
            iconName: simpleNextdotjs,
            type: TechCategory.FrontendFramework,
        },
        {
            name: "Typescript",
            iconName: simpleTypescript,
            type: TechCategory.ProgramingLanguage,
        },
        {
            name: "Javascript",
            iconName: simpleJavascript,
            type: TechCategory.ProgramingLanguage,
        },
        {
            name: "MySql",
            iconName: simpleMysql,
            type: TechCategory.Database,
        },
        {
            name: "MSSql",
            iconName: diMicrosoftsqlserverPlain,
            type: TechCategory.Database,
        },
        {
            name: "PostgreSQL",
            iconName: simplePostgresql,
            type: TechCategory.Database,
        },
        {
            name: "MongoDB",
            iconName: simpleMongodb,
            type: TechCategory.Database,
        },
        {
            name: "RESTful API",
            iconName: undefined,
            type: TechCategory.BackendFramework,
        },
        {
            name: "Docker",
            iconName: simpleDocker,
            type: TechCategory.Tools,
        },
        {
            name: "Kubernetes",
            iconName: simpleKubernetes,
            type: TechCategory.Tools,
        },
        {
            name: "AWS",
            iconName: simpleAmazonwebservices,
            type: TechCategory.Tools,
        },
        {
            name: "Azure",
            iconName: diAzurePlain,
            type: TechCategory.Tools,
        },
        {
            name: "GitHub",
            iconName: simpleGithub,
            type: TechCategory.Tools,
        },
        {
            name: "Jenkins",
            iconName: simpleJenkins,
            type: TechCategory.Tools,
        }
    ]

    getSkills(): Skill[] {
        return this.skills;
    }
}