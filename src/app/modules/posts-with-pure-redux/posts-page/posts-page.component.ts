import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '@app/models';
import { Store } from '@ngrx/store';
import { FromPostsState, loadPostAction, loadPostsAction } from '../+state';

@Component({
  selector: 'jp-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsPageComponent implements OnInit {

  public posts$: Observable<Post[]>;

  constructor(private store: Store<any>) {
    this.posts$ = this.store.select(FromPostsState.selectPosts);
  }

  ngOnInit(): void {
    this.store.dispatch(loadPostsAction());
  }

  public openPost(postId: number): void {
    this.store.dispatch(loadPostAction({ postId }));
  }
}
