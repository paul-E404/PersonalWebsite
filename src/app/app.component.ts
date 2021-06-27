import { Component, OnInit } from '@angular/core';
import { Globals } from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-website';

  currentRoute = '';

  constructor(public globals: Globals) { }

  openLegalNotice() {
    document.body.style.overflow = "hidden";
    this.globals.legalNoticeShown = true;
  }

  openDataProtection() {
    document.body.style.overflow = "hidden";
    this.globals.dataProtectionShown = true;
  }

}
