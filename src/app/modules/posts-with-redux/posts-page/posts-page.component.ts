import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Post } from '@app/models';

@Component({
  selector: 'jp-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsPageComponent {

  public posts$: Observable<Post[]>;

  constructor(private route: ActivatedRoute) {
    this.posts$ = this.route.data.pipe(map(data => data.posts));
  }
}
