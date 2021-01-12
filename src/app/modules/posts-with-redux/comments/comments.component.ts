import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '@app/models';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { CommentsActions, FromCommentsState } from '@app/modules/posts-with-redux/comments/+state';

@Component({
  selector: 'jp-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsComponent implements OnInit {

  public comments$: Observable<Comment[]>;
  public postId$: Observable<number>;

  constructor(private store: Store<any>,
              private route: ActivatedRoute) {
    this.postId$ = this.route.parent.paramMap.pipe(map(paramMap => +paramMap.get('postId')));
    this.comments$ = this.store.select(FromCommentsState.selectComments);
  }

  ngOnInit(): void {
    this.postId$.subscribe(postId => this.store.dispatch(CommentsActions.load({ postId })));
  }
}
