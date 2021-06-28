import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-start-button',
  templateUrl: './start-button.component.html',
  styleUrls: ['./start-button.component.scss']
})
export class StartButtonComponent implements OnInit {

  faArrowAltCircleDown = faArrowAltCircleDown;
  startButtonShown: boolean = false;

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.showStartButton();
  }

  /**
   * Shows start button and its animation.
   */
  showStartButton() {
    setTimeout(() => {
      this.startButtonShown = true;
    }, 4000)
  }

  /**
   * Scrolls to the particular section.
   * @param  {string} elementId Id of the section you want to go to.
   * @returns void
   */
  public jumpTo(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

}
