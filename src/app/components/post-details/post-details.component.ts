import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockApiService } from '../../services/mock-api.service';
import { Comment } from '../../models/comment.model';
import { Post } from '../../models/post.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})

export class PostDetailsComponent implements OnInit {
  post: Post | null = null;
  comments: Comment[] = [];

  constructor(
    private route: ActivatedRoute,
    private mockApi: MockApiService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mockApi.getPost(id).subscribe((post) => {
      this.post = post;
    });
    this.mockApi.getComments(id).subscribe((comments) => {
      this.comments = comments;
    });
  }
}
