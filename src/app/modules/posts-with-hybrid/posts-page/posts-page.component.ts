import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '@app/models';
import { Store } from '@ngrx/store';
import { FromPostsPageState } from './+state';

@Component({
  selector: 'jp-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsPageComponent {

  public posts$: Observable<Post[]>;

  constructor(private store: Store<any>) {
    this.posts$ = this.store.select(FromPostsPageState.selectPosts);
  }
}
