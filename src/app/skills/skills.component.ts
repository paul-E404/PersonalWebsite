import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillsNames = ['HTML', 'CSS, SCSS', 'Javascript', 'Typescript, Angular', 'Bootstrap', 'Material Design', 'Rest-APIs', 'Google Firebase', 'SCRUM, Kanban'];
  skillsPercentage = [90, 90, 80, 40, 60, 50, 60, 40, 40];

  constructor() { }

  ngOnInit(): void {
  }

  setBarWidth(i: number) {
    let barWidth = {
      'width': this.skillsPercentage[i] + '%'
    };
    return barWidth;
  }

}

