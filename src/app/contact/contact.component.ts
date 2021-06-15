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
  endpoint: string = 'http://paul-engerling.developerakademie.com/Modul12/Personal-Website/send_mail.php';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.singleMessage = new contactMessage('', '', '', '');
  }

  newContactMessage() {
    console.log("singleMessage", this.singleMessage);
  }

  onSubmit(myForm: any) {
    this.submitted = true;
    this.http.post(this.endpoint, myForm.value)
      .subscribe(
        (response) => {
          console.log("Der Typ des Übergabeparameters contactForm in der Funktion onSubmit:", typeof(myForm), "Der Parameter selbst: ", myForm);
          console.log("Die Response nach submit lautet:", response);
        },
        (error) => {
          console.log("Fehlermeldung von fehlgeschlagenem onSubmit()", error);
        });
  }

}
