import { NgModule } from '@angular/core';
import { ToolbarWebsiteComponent } from './toolbar-website.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [ToolbarWebsiteComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [ToolbarWebsiteComponent]
})
export class ToolbarWebsiteModule { }