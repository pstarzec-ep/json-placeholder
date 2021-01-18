import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '@app/models';
import { Store } from '@ngrx/store';
import { FromPostPageState } from './+state';

@Component({
  selector: 'jp-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostPageComponent {

  public post$: Observable<Post>;

  constructor(private store: Store<any>) {
    this.post$ = this.store.select(FromPostPageState.selectPost);
  }

}
