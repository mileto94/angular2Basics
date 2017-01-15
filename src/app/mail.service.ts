import { Injectable } from '@angular/core';

import { Message } from './models/mail';

@Injectable()
export class MailService {

  constructor() {
  }

  getMessages(): Promise<Array<Message>> {
    return Promise.resolve([
      {
        "id": "234324-342df-qq2423",
        "from": "Clariss",
        "subject": "Phone call",
        "text": "Hi there! Are you free to make a call in 15min?"
      },
      {
        "id": "2251656-sdsdsds-qq2423",
        "from": "John",
        "subject": "Meeting",
        "text": "Yo! Tomorrow there's a team meeting at 2PM."
      },
      {
        "id": "5656562-342df-qq2423",
        "from": "Jane",
        "subject": "Ladies night",
        "text": "Hii! Are you ready for the craziest night in your life?"
      }
    ]);

  }

}
