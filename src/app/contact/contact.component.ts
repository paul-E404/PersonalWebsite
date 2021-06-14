import { Component, OnInit } from '@angular/core';
import { contactMessage } from '../models/contact-message';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  singleMessage: contactMessage;
  submitted: boolean = false;
  serverURL: string = 'http://paul-engerling.developerakademie.com/Modul12/Personal-Website/send_mail.php';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.singleMessage = new contactMessage('', '', '', '');
  }

  newContactMessage() {
    console.log("singleMessage", this.singleMessage);
  }

  onSubmit() {
    this.submitted = true;
    this.http.post<contactMessage>(this.serverURL, {title: 'Contact form message example'}).subscribe( data => {
      console.log("data nach dem Post request", data);
    });
  }

}
