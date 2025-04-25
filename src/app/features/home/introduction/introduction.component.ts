import { Component } from '@angular/core';
import { TypewriterDirective } from '../../../shared/typewriter.directive'
import { NgIcon } from '@ng-icons/core';
import { heroArrowDownTraySolid } from '@ng-icons/heroicons/solid';
import { simpleGmail } from '@ng-icons/simple-icons'

@Component({
  selector: 'home-introduction',
  imports: [TypewriterDirective, NgIcon],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent{
  name = 'Wan Siew Yik';
  titles = ['Software Engineer', '.Net Developer'];
  resumePath = 'files/SoftwareEngineer_WanSiewYik.pdf';

  downloadIcon = heroArrowDownTraySolid
  emailIcon = simpleGmail
}