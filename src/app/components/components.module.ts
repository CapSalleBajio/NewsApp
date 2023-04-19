import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CHeaderComponent } from './c-header/c-header.component';
import { CPostComponent } from './c-post/c-post.component';
import { CSidebarComponent } from './c-sidebar/c-sidebar.component';
import { CSidebarNewsItemComponent } from './c-sidebar-news-item/c-sidebar-news-item.component';



@NgModule({
  declarations: [
    CHeaderComponent,
    CPostComponent,
    CSidebarComponent,
    CSidebarNewsItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CHeaderComponent,
    CPostComponent,
    CSidebarComponent,
    CSidebarNewsItemComponent
  ]
})
export class ComponentsModule { }
