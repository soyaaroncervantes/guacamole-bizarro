import { NgModule } from '@angular/core';
import { ToolbarWebsiteComponent } from './toolbar-website.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ButtonAccessModule } from '@component/button-access';

@NgModule({
  declarations: [ToolbarWebsiteComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    ButtonAccessModule
  ],
  exports: [ToolbarWebsiteComponent]
})
export class ToolbarWebsiteModule { }
