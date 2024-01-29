import { ChatService } from './../chat.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{

  messages: Message[] = [];
  value:string | undefined
  dialoginfo: any;

  constructor(public chatService:ChatService){}

  ngOnInit(): void {
    this.chatService.conversation.subscribe((val: ConcatArray<Message>)=>{
      this.messages = this.messages.concat(val);
    });
  }

  sendMessage(){
    this.chatService.getBotAnswer(this.value);
    this.value = ''
  }

}
