import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '@app/models';
import { Store } from '@ngrx/store';
import { commentDetailsLoadedAction, commentsLoadedAction, FromPostsState, loadCommentsAction, postLoadedAction } from '../+state';
import { take } from 'rxjs/operators';

@Component({
  selector: 'jp-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostPageComponent {

  public post$: Observable<Post>;

  constructor(private store: Store<any>) {
    this.post$ = this.store.select(FromPostsState.selectPost);
  }

  public showComments(): void {
    this.post$.pipe(
      take(1),
    ).subscribe(post => {
      this.store.dispatch(loadCommentsAction({ postId: post.id }));
    });
  }

  public backToPosts(): void {
    this.store.dispatch(postLoadedAction({ post: null }));
    this.store.dispatch(commentsLoadedAction({ comments: null }));
    this.store.dispatch(commentDetailsLoadedAction({ comment: null }));
  }
}
