import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  aboutMeImageSources: string[] = [
    'studying.jpg',
    'gastronomy.jpg',
    'development.jpg'];

  aboutMeTexts: string[] = [
    'Having a master\'s degree in business education with a minor in mathematics...',
    'Responsible for staff and all catering areas (café, restaurant, cocktail bar) as a shift manager in a cinema in Nuremberg...',
    '...the corona pandemic made me break new ground and discover my passion for programming at the Developer Academy.'
  ];

  constructor(public globals: Globals) { }

  ngOnInit(): void {
    this.globals.checkForMiddleScreenWidth();
  }

}
