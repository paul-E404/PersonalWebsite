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
    'Amazing Frontend Development 2.0',
    'Graduated as Master of Science from WiSo Nuremberg',
    'Fell in love with coding'
  ];
  currentImageIndex = 0;
  showImage = true;

  ngOnInit(): void {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImageIndex++;
      this.currentImageIndex = this.currentImageIndex % this.images.length;
      this.showImage = false;
      setInterval(() => {
        this.showImage = true;
      }, 10)
    }, 10000);
  }

}
