import { Component, OnInit, Inject } from '@angular/core';
import { Message } from '../models/mail';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  messages: Array<Message>;
  replies: Array<Object>;

  constructor(@Inject('mail') private mail) {
    this.messages = [];
    this.replies = [];
  }

  ngOnInit() {
  }


  clicked(event, name) {
    console.log(event);  
    console.log(`I was clicked with '${name}'`);
  }

  getMessages() {
    this.mail.getMessages().then(msgs => {
      this.messages = msgs;

      // in TS for creates local scope that shadows object's one
      let that = this;

      for (let m of msgs) {
        that.replies[m.id] = '';
      }

    });
  }

  sendReply(replyText, msgId) {
    this.replies[msgId] = replyText;
    console.log(this.replies);
  }

}
