import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DatePipe} from "@angular/common";
import {MatCard, MatCardContent, MatCardFooter} from "@angular/material/card";
import {MatIcon} from '@angular/material/icon';
import {MatMiniFabButton} from '@angular/material/button';

@Component({
  selector: 'app-post-card',
  imports: [
    DatePipe,
    MatCard,
    MatCardContent,
    MatCardFooter,
    MatIcon,
    MatMiniFabButton
  ],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {
  @Input() item: any;

  @Output() onDeletePost = new EventEmitter<any>();
  @Output() onEditPost = new EventEmitter<any>();

  editPost(item: any) {
    this.onEditPost.emit(item);
  }

  deletePost(item: any){
    this.onDeletePost.emit(item);
  }
}
