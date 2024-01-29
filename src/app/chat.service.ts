import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class Message{
  constructor(public author:string, public content:string){}
}


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  conversation = new Subject<Message[]>();
  messageMap:any ={
    "hi":"hello",
    "Hi":"Hello",
    "who are you":"My name is Sendwo AI Bot",
    "Who are you":"My name is Sendwo AI Bot",
    "what is whatsapp messaging service":"WhatsApp is a widely used messaging service that allows users to send text messages, voice messages, multimedia files (images, videos, documents), and make voice and video calls over the internet.",
    "What is whatsapp messaging service":"WhatsApp is a widely used messaging service that allows users to send text messages, voice messages, multimedia files (images, videos, documents), and make voice and video calls over the internet.",
    "default":"I can't understand. For any further query please reach out to Neha Kumari."
  }

  getBotAnswer(msg:any){
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    },1500);
  }

  getBotMessage(question:string){
    let answer = this.messageMap[question];
    return answer || this.messageMap['default']
  }
}
