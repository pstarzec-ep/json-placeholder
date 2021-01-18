import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '@app/models';
import { Store } from '@ngrx/store';
import { FromCommentDetailsState } from './+state';

@Component({
  selector: 'jp-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentDetailsComponent {

  public comment$: Observable<Comment>;

  constructor(private store: Store<any>) {
    this.comment$ = this.store.select(FromCommentDetailsState.selectComment);
  }
}
