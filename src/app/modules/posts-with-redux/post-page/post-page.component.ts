import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Comment, Post } from '@app/models';
import { Store } from '@ngrx/store';
import { FromPostState } from '@app/modules/posts-with-redux/post-page/+state';
import { FromPostsState } from '@app/modules/posts-with-redux/posts-page/+state';

@Component({
  selector: 'jp-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostPageComponent {

  public loading$: Observable<boolean>;
  public post$: Observable<Post>;
  public comments$: Observable<Comment[]>;

  constructor(private store: Store<any>) {
    this.loading$ = this.store.select(FromPostsState.selectLoading);
    this.post$ = this.store.select(FromPostState.selectPost);
    // this.comments$ = this.route.data.pipe(map(data => data.comments));
  }

}
