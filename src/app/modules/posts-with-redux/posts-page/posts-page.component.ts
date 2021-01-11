import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '@app/models';
import { Store } from '@ngrx/store';
import { FromPostsState } from './+state';

@Component({
  selector: 'jp-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsPageComponent {

  public loading$: Observable<boolean>;
  public posts$: Observable<Post[]>;

  constructor(private store: Store<any>) {
    this.loading$ = this.store.select(FromPostsState.selectLoading);
    this.posts$ = this.store.select(FromPostsState.selectPosts);
  }
}
