import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Comment } from '@app/models';
import { FromPostsState, loadCommentDetailsAction } from '../+state';

@Component({
  selector: 'jp-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsComponent {

  public comments$: Observable<Comment[]>;

  constructor(private store: Store<any>) {
    this.comments$ = this.store.select(FromPostsState.selectComments);
  }

  public showComment(commentId: number): void {
    this.store.dispatch(loadCommentDetailsAction({ commentId }));
  }
}
