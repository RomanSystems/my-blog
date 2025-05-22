import {Component, inject, OnInit, signal} from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIcon} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {PostCardComponent} from '../post-card/post-card.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {PostModel} from '../../../core/models/post.model';
import {PostRepository} from '../../../data/repository/post.repository';
import {PostService} from '../../../core/services/post.service';
import {FormPostComponent} from '../form-post/form-post.component';

@Component({
  selector: 'app-post-list-component',
  imports: [
    MatSlideToggleModule,
    MatIcon,
    MatButtonModule,
    PostCardComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormPostComponent
  ],
  templateUrl: './post-list-component.component.html',
  styleUrl: './post-list-component.component.css'
})
export class PostListComponentComponent implements OnInit {
  postService = inject(PostService);
  postRepository = inject(PostRepository);

  readonly todo_m = signal('');
  readonly taskId_m = signal(0);
  readonly showCreate = signal(false);

  postList: PostModel[] = [];
  refreshData() {
    this.postList = this.postRepository.getPost();
  }

  ngOnInit() {
    this.postRepository.chargeInitialization();
    this.refreshData();
  }

  showCreateCom(){
    this.showCreate.set(true);
  }

  cancelArticle(){
    this.showCreate.set(false);
  }

  onArticleSubmitted(article: PostModel) {
    this.postService.addPostToList(article);
    this.refreshData();
  }

  onEditPost(data: any){
    let post = this.postService.getPost(data.url)

  }

  onDeletePost(data: any) {
    if(window.confirm("Estas seguro?")){
      console.log(data);
      this.postService.removePostFromList(data.url);
      this.refreshData();
    }
  }
}
