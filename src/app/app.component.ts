import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PostListComponentComponent} from './presentation/components/post-list-component/post-list-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostListComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyBlog';
}
