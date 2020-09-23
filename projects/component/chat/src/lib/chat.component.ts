import { AfterViewChecked, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ChatService } from './chat.service';
import { Observable } from 'rxjs';
import { Message } from '@interfaces/message';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'component-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {

  mensaje = '';
  chats: Observable<Message[]>;
  @ViewChild('messageElement', { static: false }) messageElement: ElementRef<HTMLDivElement>;

  constructor(
    private chatService: ChatService
  ) {
    this.chats = this.chatService.loadChats
      .pipe(
        tap(
          () => this.messageElement.nativeElement.scrollTop = this.messageElement.nativeElement.scrollHeight )
      );
  }

  ngOnInit(): void { }

  ngAfterViewChecked(): void {
    this.messageElement.nativeElement.scrollTop = this.messageElement.nativeElement.scrollHeight;
  }

  sendMessage(): void {

    if ( this.mensaje.length === 0 ) { return; }

    const subscription = this.chatService
      .add( this.mensaje )
      .subscribe(() => this.mensaje = '' );

    subscription.unsubscribe();

  }
}
