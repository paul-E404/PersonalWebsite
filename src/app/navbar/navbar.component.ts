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

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
    this.navbarFolded = true;
    document.body.style.overflow = "auto";
    this.globals.legalNoticeShown = false;
    this.globals.dataProtectionShown = false;
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
