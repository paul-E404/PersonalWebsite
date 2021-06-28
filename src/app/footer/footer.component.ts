import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faLinkedin = faLinkedin;
  faGithub = faGithub;

  @Output() onClickLegalNotice = new EventEmitter;
  @Output() onClickDataProtection = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Fires the event for legal notice to be shown.
   */
  onOpenLegalNotice() {
    this.onClickLegalNotice.emit();
  }

  /**
   * Fires the event for data protection to be shown.
   */
  onOpenDataProtection() {
    this.onClickDataProtection.emit();
  }

}
