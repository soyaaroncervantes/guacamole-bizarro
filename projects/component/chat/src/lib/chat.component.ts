import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'component-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  mensaje = '';

  constructor(
    private chatService: ChatService
  ) {
    this.chatService.loadChats.subscribe();
  }

  ngOnInit(): void {}

  sendMessage(): void { }
}
