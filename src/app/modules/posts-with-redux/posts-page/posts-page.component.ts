import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Post } from '@app/models';
import { Store } from '@ngrx/store';
import { FromPostPageState } from '@app/modules/posts-with-redux/posts-page/+state';

@Component({
  selector: 'jp-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsPageComponent {

  public posts$: Observable<Post[]>;

  constructor(private store: Store<any>) {
    this.posts$ = this.store.select(FromPostPageState.selectPosts);
  }
}
