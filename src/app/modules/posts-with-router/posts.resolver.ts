import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from '@app/services';
import { Post } from '@app/models';

@Injectable({
  providedIn: 'root',
})
export class PostsResolver implements Resolve<Post[]> {

  constructor(private readonly postService: PostService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
    return this.postService.getPosts();
  }
}
