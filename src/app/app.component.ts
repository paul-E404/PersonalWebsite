import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'personal-website';

  images = ['office1.jpg', 'office2.jpg', 'office3.jpg'];
  currentImageIndex = 0;
  showImage = true;

  ngOnInit() {
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
