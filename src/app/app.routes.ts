import { Routes } from '@angular/router';
import {PostListComponentComponent} from './presentation/components/post-list-component/post-list-component.component';
import {PostDetailComponent} from './presentation/components/post-detail/post-detail.component';

export const routes: Routes = [
  {
    path: '', component: PostListComponentComponent, title: 'Lista noticias'
  },
  {
    path: 'detail/:url', component: PostDetailComponent, title: 'Detalle de publicacion'
  }
];
