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
    'I got a <span class="highlight">master\'s degree</span> in business education with a minor in mathematics from WiSo Nuremberg in 2018.',
    'For the last 2.5 years I was responsible for staff and different catering areas (café, restaurant, cocktail bar) as a <span class="highlight">shift supervisor</span> in a cinema in Nuremberg.',
    'In 2021 the corona pandemic made me break new ground and discover my passion for programming at the <a href="https://developerakademie.com" target="_blank"><span class="highlight">Developer Academy.</span></a>'
  ];

  constructor(public globals: Globals) { }

  ngOnInit(): void {
    this.globals.checkForMiddleScreenWidth();
  }

}
