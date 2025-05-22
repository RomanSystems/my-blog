import {Component, inject, OnInit} from '@angular/core';
import {PostModel} from '../../../core/models/post.model';
import {PostService} from '../../../core/services/post.service';
import {ActivatedRoute} from '@angular/router';
import {PostCardComponent} from '../post-card/post-card.component';

@Component({
  selector: 'app-post-detail',
  imports: [
    PostCardComponent
  ],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit {
  route = inject(ActivatedRoute);

  item!: PostModel;
  url!: string;
  productService = inject(PostService);
  ngOnInit() {
    this.url = String(this.route.snapshot.paramMap.get('url'));
    this.item = this.productService.getPost(this.url);
    console.log(this.item);
  }
}
