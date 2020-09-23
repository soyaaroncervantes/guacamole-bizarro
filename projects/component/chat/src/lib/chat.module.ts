import { NgModule } from '@angular/core';
import { ChatComponent } from './chat.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ChatComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [ChatComponent]
})
export class ChatModule { }
