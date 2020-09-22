import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'lib-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  mensaje = '';

  constructor(
    private chatService: ChatService
  ) {
    this.chatService.loadChats.subscribe( console.log );
  }

  ngOnInit(): void {}

  sendMessage(): void { }
}
