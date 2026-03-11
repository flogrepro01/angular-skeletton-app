import { Component, inject } from '@angular/core';
import { PostListService } from '../../core/services/post-list-service';
import { CommonModule } from '@angular/common';
import { PostInterface } from './post-interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule],
  template: `
    <h1>Post list</h1>
    @if(posts$ | async; as posts){
      <ul>
        @for (post of posts; track post.id){
          <li>
            <h3>{{post.body}}</h3>
          </li>
        }
      </ul>
    }
    
  `,
  styleUrl: './post-list.css',
})
export class PostList {
  private postService = inject(PostListService);

  posts$ = this.postService
    .getPosts()
    .pipe(map((posts) => this.transformPosts(posts)));

  private transformPosts(posts: PostInterface[]): PostInterface[] {
    return posts.map((post) => ({
      ...post,
      body: `${post.body} and a new string`,
    }));
  }
}
