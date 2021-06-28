import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  constructor() { }

  images = ['office1.jpg', 'office2.jpg', 'office3.jpg'];
  headlines = [
    'German Javascript Frontend Developer',
    'Graduated as Master of Science from WiSo Nuremberg',
    'Fell in love with coding'
  ];

  currentImageIndex = 0;
  showImage0 = true;
  showImage1 = true;
  showImage2 = false;
  animateImage0 = true;
  animateImage1 = false;
  animateImage2 = false;

  ngOnInit(): void {
    this.updateImage();
  }

  /**
   * Updates the current (preloaded) picture for slideshow animation.
   */
  updateImage() {
    setInterval(() => {
      this.currentImageIndex++;
      this.currentImageIndex = this.currentImageIndex % this.images.length;
      if (this.currentImageIndex == 0) {
        this.showImage0 = true;
        this.showImage1 = true;
        this.showImage2 = false;
        this.animateImage0 = true;
        this.animateImage1 = false;
        this.animateImage2 = false;
      }
      else if (this.currentImageIndex == 1) {
        this.showImage0 = false;
        this.showImage1 = true;
        this.showImage2 = true;
        this.animateImage0 = false;
        this.animateImage1 = true;
        this.animateImage2 = false;
      }
      else if (this.currentImageIndex == 2) {
        this.showImage0 = true;
        this.showImage1 = false;
        this.showImage2 = true;
        this.animateImage0 = false;
        this.animateImage1 = false;
        this.animateImage2 = true;
      }
    }, 10000);
  }

}
