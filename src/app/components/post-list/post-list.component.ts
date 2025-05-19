import { Component, OnInit } from '@angular/core';
import { MockApiService } from '../../services/mock-api.service';
import { Post } from '../../models/post.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  filteredPosts: Post[] = [];
  page = 1;
  hasMore = true;
  searchQuery = '';

  constructor(private mockApi: MockApiService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.mockApi.getPosts(this.page).subscribe(({ next, result }) => {
      this.posts = [...this.posts, ...result];
      this.filteredPosts = this.filterByQuery(this.searchQuery);
      this.hasMore = next;
      this.page++;
    });
  }

  filterPosts() {
    this.filteredPosts = this.filterByQuery(this.searchQuery);
  }

  private filterByQuery(query: string): Post[] {
    if (!query.trim()) return this.posts;
    const lower = query.toLowerCase();
    return this.posts.filter(p =>
      p.title.toLowerCase().includes(lower) ||
      p.body.toLowerCase().includes(lower)
    );
  }
}
