import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '@app/models';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'jp-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsComponent {

  public comments$: Observable<Comment[]>;
  public commentId$: Observable<number>;

  constructor(private route: ActivatedRoute) {
    this.comments$ = this.route.data.pipe(map(data => data.comments));
    this.commentId$ = this.route.params.pipe(map(params => +params.commentId));
  }
}
