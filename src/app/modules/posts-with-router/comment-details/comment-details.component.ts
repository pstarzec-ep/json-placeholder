import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '@app/models';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'jp-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentDetailsComponent {

  public comment$: Observable<Comment>;

  constructor(private route: ActivatedRoute) {
    this.comment$ = this.route.data.pipe(map(data => data.comment));
  }
}
