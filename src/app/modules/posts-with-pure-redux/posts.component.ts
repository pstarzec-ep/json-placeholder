import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Comment, Post } from '@app/models';
import { FromPostsState, loadPostsAction } from './+state';

@Component({
  selector: 'jp-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {

  public posts$: Observable<Post[]>;
  public post$: Observable<Post>;
  public comments$: Observable<Comment[]>;
  public comment$: Observable<Comment>;

  constructor(private store: Store<any>) {
    this.posts$ = this.store.select(FromPostsState.selectPosts);
    this.post$ = this.store.select(FromPostsState.selectPost);
    this.comments$ = this.store.select(FromPostsState.selectComments);
    this.comment$ = this.store.select(FromPostsState.selectComment);
  }

  ngOnInit(): void {
    this.store.dispatch(loadPostsAction());
  }

}
