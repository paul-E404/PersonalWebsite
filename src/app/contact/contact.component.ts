import { Component, OnInit } from '@angular/core';
import { contactMessage } from '../models/contact-message';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  email: string = 'paul_engerling@web.de';
  singleMessage: contactMessage;
  submitted: boolean = false;
  errorMessageShown: boolean = false;
  notSubmitted: boolean = false;
  endpoint: string = 'http://paul-engerling.developerakademie.com/Modul12/Personal-Website/send_mail.php';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.singleMessage = new contactMessage('', '', '', '');
  }

  /**
   * Submits the form with all its data to the php document on the webserver.
   * @param  {any} myForm The filled out form to be sent.
   */
  onSubmit(myForm: any) {
    this.http.post(this.endpoint, myForm.value)
      .subscribe(
        (response) => {
          this.submitted = true;
          console.log("Typ des Übergabeparameters myForm in der Funktion onSubmit:", typeof (myForm), "Parameter myForm selbst: ", myForm);
          console.log("Response nach onSubmit lautet:", response);
        },
        (error) => {
          this.errorMessageShown = true;
          console.log("Fehlermeldung von fehlgeschlagenem onSubmit()", error);
        });
  }

  /**
   * Shows written but not sent message.
   */
  backToMessage() {
    this.errorMessageShown = false;
  }
}
