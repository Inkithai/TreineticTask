import { TestBed } from '@angular/core/testing';
import { MockApiService } from './mock-api.service';

describe('MockApiService', () => {
  let service: MockApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockApiService);
  });

  it('should return 10 posts for page 1', (done) => {
    service.getPosts(1).subscribe(({ result }) => {
      expect(result.length).toBe(10);
      done();
    });
  });

  it('should return a post with id 1', (done) => {
    service.getPost(1).subscribe((post) => {
      expect(post.id).toBe(1);
      done();
    });
  });
});
