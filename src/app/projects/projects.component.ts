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
      'href': 'http://paul-engerling.developerakademie.com/Modul11/El-Pollo-Loco/index.html',
      'description': 'El Pollo Loco is a jump and run browser game made with Javascript. It is playable on keyboard as well on mobile devices with touch functionality.',
      'techniques': ['HTML', 'CSS', 'JavaScript', 'Canvas drawing'],
      'documentation': 'jsDoc'
    },
    {
      'title': 'Join',
      'imageSrc': 'join_small.png',
      'href': 'http://gruppe-63.developerakademie.com/Join/',
      'description': 'Join is a group project which I developed with two other students of the Developer Akademie. The idea is based on a kanban board.',
      'techniques': ['HTML', 'CSS', 'JavaScript', 'Registration', 'Login', 'Encrypting', 'Image Upload'],
      'documentation': 'jsDoc'
    },
    {
      'title': 'Pokédex',
      'imageSrc': 'pokedex_small.png',
      'href': 'http://paul-engerling.developerakademie.com/Modul9/Pok%C3%A9dex/index.html',
      'description': 'Pokédex is an collection of small pokémonsters. The data was fetched from a public Pokémon API.',
      'techniques': ['HTML', 'CSS', 'JavaScript', 'REST-API', 'Pagination'],
      'documentation': 'jsDoc'
    },
    {
      'title': 'Ring of Fire',
      'imageSrc': 'rof_small.png',
      'href': 'https://ring-of-fire-c6e75.web.app/',
      'description': 'Ring of Fire, also known as Kings Cup, is a short drinking card game based on Angular. It can be played with up to nine players synchronously on several devices.',
      'techniques': ['HTML', 'SCSS', 'Keyframes', 'Angular', 'Material Design', 'Google Firebase Backend'],
      'documentation': 'compoDoc'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
