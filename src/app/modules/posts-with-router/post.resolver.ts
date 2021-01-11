import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PostService } from '@app/services';
import { Post } from '@app/models';

@Injectable({
  providedIn: 'root',
})
export class PostResolver implements Resolve<Post> {

  constructor(private readonly postService: PostService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> {
    const postId = route.paramMap.get('postId');
    if (!postId) {
      return of(null);
    }
    return this.postService.getPostById(+postId);
  }
}
