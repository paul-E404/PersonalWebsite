import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillsNames = ['HTML', 'CSS, SCSS', 'Javascript', 'Typescript, Angular', 'Bootstrap', 'Material Design', 'Rest-APIs', 'Google Firebase', 'SCRUM, Kanban'];
  skillsPercentage = [90, 90, 80, 40, 60, 50, 60, 40, 40];

  /* middleScreenWidthReached: boolean = false; */

  constructor(public globals: Globals) { }

  ngOnInit(): void {
    if (window.innerWidth <= 1200) {
      this.globals.middleScreenWidthReached = true;
    }
  }


  setBarWidth(i: number) {
    let barWidth = {
      'width': this.skillsPercentage[i] + '%'
    };
    return barWidth;
  }

}

