import { Injectable } from '@angular/core';

import { Message } from './models/mail';

@Injectable()
export class MailService {

  constructor() {
  }

  getMessages(): Promise<Array<Message>> {
    return Promise.resolve([
      {
        "from": "Clariss",
        "subject": "Phone call",
        "text": "Hi there! Are you free to make a call in 15min?"
      },
      {
        "from": "John",
        "subject": "Meeting",
        "text": "Yo! Tomorrow there's a team meeting at 2PM."
      },
      {
        "from": "Jane",
        "subject": "Ladies night",
        "text": "Hii! Are you ready for the craziest night in your life?"
      }
    ]);

  }

}
