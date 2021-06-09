import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      'title': 'El Pollo Loco',
      'imageSrc': 'el_pollo_loco_small.png',
      'description': 'Here is the description of the project',
      'techniques': ['HTML', 'CSS', 'Javascript'],
      'documentation': 'jsDoc'
    },
    {
      'title': 'Join',
      'imageSrc': 'join_small.png',
      'description': 'Here is the description of the project',
      'techniques': ['HTML', 'CSS', 'Javascript'],
      'documentation': 'jsDoc'
    },
    {
      'title': 'Pokédex',
      'imageSrc': 'pokedex_small.png',
      'description': 'Here is the description of the project',
      'techniques': ['HTML', 'CSS', 'Javascript'],
      'documentation': 'jsDoc'
    },
    {
      'title': 'Ring of Fire',
      'imageSrc': 'rof_small.png',
      'description': 'Here is the description of the project',
      'techniques': ['HTML', 'CSS', 'Javascript'],
      'documentation': 'compoDoc'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
