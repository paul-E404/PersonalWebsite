import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { faElementor } from '@fortawesome/free-brands-svg-icons';
import { Globals } from '../globals';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faElementor = faElementor;
  navbarFolded: boolean = true;

  constructor(private viewportScroller: ViewportScroller, public globals: Globals) { }

  ngOnInit(): void {
  }

  /**
   * Scrolls to the particular section.
   * @param  {string} elementId Id of the section you want to go to.
   * @returns void
   */
  public jumpTo(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
    this.navbarFolded = true;
    this.globals.closeDialog();
  }

  /**
   * Folds and unfolds navbar on click.
   */
  toggleNavbar() {
    if (this.navbarFolded) {
      this.navbarFolded = false;
    }
    else if (!this.navbarFolded) {
      this.navbarFolded = true;
    }
  }

}
