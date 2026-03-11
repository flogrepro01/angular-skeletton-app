import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostInterface } from '../../components/post-list/post-interface';

@Injectable({
  providedIn: 'root',
})
export class PostListService {
  private http = inject(HttpClient);
  private URL_API =
    'https://my-json-server.typicode.com/typicode/demo/comments';

  getPosts(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(this.URL_API);
  }
}
