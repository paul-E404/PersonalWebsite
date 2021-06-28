import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-body-picture',
  templateUrl: './full-body-picture.component.html',
  styleUrls: ['./full-body-picture.component.scss']
})
export class FullBodyPictureComponent implements OnInit {

  constructor() { }

  fullBodyPictureShown = false;
  overlayBarsShown = false;

  ngOnInit(): void {
    this.showFullBodyPicture();
    this.showOverlayBars();
  }

  /**
   * Displays preloaded full body picture.
   */
  showFullBodyPicture() {
    setTimeout(() => {
      this.fullBodyPictureShown = true;
    }, 2000);
  }

  /**
   * Starts animation of overlay bars.
   */
  showOverlayBars() {
    setTimeout(() => {
      this.overlayBarsShown = true;
    }, 3000);
  }

}