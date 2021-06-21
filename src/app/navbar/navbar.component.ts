import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { faElementor } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faElementor = faElementor;
  navbarFolded: boolean = true;

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
    this.navbarFolded = true;
  }

  toggleNavbar() {
    if(this.navbarFolded) {
      this.navbarFolded = false;
    }
    else if(!this.navbarFolded) {
      this.navbarFolded = true;
    }
  }

}
