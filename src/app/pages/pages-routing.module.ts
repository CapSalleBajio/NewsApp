import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TNewsPostComponent } from './templates/t-news-post/t-news-post.component';

const routes: Routes = [
  {path: 'news', component: TNewsPostComponent },
  {path: '**', redirectTo: 'news' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
