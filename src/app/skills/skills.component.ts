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

  constructor(public globals: Globals) { }

  ngOnInit(): void {
    this.globals.checkForMiddleScreenWidth();
  }

  /**
   * Sets width of bar depending on percentage rate.
   * @param  {number} i Index of skillsNames array.
   */
  setBarWidth(i: number) {
    let barWidth = {
      'width': this.skillsPercentage[i] + '%'
    };
    return barWidth;
  }

}

