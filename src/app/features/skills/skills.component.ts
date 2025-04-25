import { Component, inject } from '@angular/core';
import { SkillsService, Skill, TechCategory } from './skills.service';
import { NgIcon } from '@ng-icons/core';
import { KeyValuePipe } from '@angular/common';

type SkillObject = {
    [key in TechCategory]?: Skill[]
}

@Component({
  selector: 'home-skills',
  imports: [NgIcon, KeyValuePipe],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
    private skillsService = inject(SkillsService);
    
    skillsData = this.deserializeSkillsData(this.skillsService.getSkills());


    deserializeSkillsData(skills: Skill[]): SkillObject {
        const deserialized: SkillObject = {};

        for ( let item of skills) {
            if (!deserialized[item.type]) {
                deserialized[item.type] = [];
            }
            deserialized[item.type]?.push(item)
        }
        
        return deserialized;
    }

    getCategoryTitle(category: string) {
        switch(category) {
            case TechCategory.BackendFramework.toString():
                return "Backend Framework"
            case TechCategory.Database.toString():
                return "Database"
            case TechCategory.FrontendFramework.toString():
                return "Frontend Framework"
            case TechCategory.ProgramingLanguage.toString():
                return "Programing Language"
            case TechCategory.Tools.toString():
                return "Tools"
            default:
                return "Not found"
        }
    }
}