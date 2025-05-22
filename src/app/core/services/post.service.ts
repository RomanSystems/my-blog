import {inject, Injectable} from '@angular/core';
import {PostRepository} from '../../data/repository/post.repository';
import {PostModel} from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postRepository = inject(PostRepository);

  createRandomString(length: number) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  addPostToList(task: PostModel): void {
    let lista = this.postRepository.getPost();
    task.url = this.createRandomString(10);
    let renewLista = [...lista, task];
    this.postRepository.storePost(renewLista);
  }

  getPost(url: string): PostModel {
    let list = this.postRepository.getPost();
    console.log(list);
    var s = list.filter((item, index) => item.url === url)[0];
    console.log(s);
    return list.filter((item) => item.url === url)[0];
  }

  updatePost(post: PostModel): void {
    let lista = this.postRepository.getPost();
    let renewLista = lista.filter(function (item: PostModel) {
      if (item.url === post.url) {
        item = post;
      }
      return item;
    });
    this.postRepository.storePost(renewLista);
  }

  removePostFromList(url: string): void {
    let lista = this.postRepository.getPost();
    let newLista = lista.filter((item: PostModel) => item.url !== url);
    this.postRepository.storePost(newLista);
  }
}
