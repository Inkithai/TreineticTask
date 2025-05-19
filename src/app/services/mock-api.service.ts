import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../../app/models/post.model';
import { Comment } from '../../app/models/comment.model';
import mockData from '../../app/assets/data/mock-data.json';

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  private posts: Post[] = mockData.posts;
  private comments: Comment[] = mockData.comments;

  getPosts(page: number): Observable<{ next: boolean; result: Post[] }> {
    const start = (page - 1) * 10;
    const result = this.posts.slice(start, start + 10);
    const next = start + 10 < this.posts.length;
    return of({ next, result });
  }

  getPost(id: number): Observable<Post> {
    const post = this.posts.find(p => p.id === id);
    return of(post!);
  }

  getComments(postId: number): Observable<Comment[]> {
    const comments = this.comments.filter(c => c.postId === postId);
    return of(comments);
  }
}
