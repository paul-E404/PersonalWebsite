import { Component, OnInit } from '@angular/core';
import { contactMessage } from '../models/contact-message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  singleMessage: contactMessage;
  submitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.singleMessage = new contactMessage('', '', '', '');
  }

  newContactMessage() {
    console.log("singleMessage", this.singleMessage);
  }

  onSubmit() {
    this.submitted = true;
  }

}
