import { Component, OnInit } from '@angular/core';
import { MailService } from '../mail.service';
import { Message } from '../models/mail';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  messages: Array<Message>;

  constructor(private mail: MailService) {
    this.messages = []
  }

  ngOnInit() {
  }


  clicked(event, name) {
    console.log(event);  
    console.log(`I was clicked with '${name}'`);
  }

  getMessages() {
    this.mail.getMessages().then(msgs => this.messages = msgs);
  }

}
