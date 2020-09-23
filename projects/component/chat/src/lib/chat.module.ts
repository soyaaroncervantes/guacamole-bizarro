import { NgModule } from '@angular/core';
import { ChatComponent } from './chat.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ChatComponent],
  imports: [
    FormsModule
  ],
  exports: [ChatComponent]
})
export class ChatModule { }
