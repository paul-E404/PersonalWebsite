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

  constructor() { }

  ngOnInit(): void {
  }

  onOpenLegalNotice() {
    this.onClickLegalNotice.emit();
  }

}
