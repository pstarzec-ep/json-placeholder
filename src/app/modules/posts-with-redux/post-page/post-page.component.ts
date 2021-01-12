import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Comment, Post } from '@app/models';

@Component({
  selector: 'jp-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostPageComponent {

  public post$: Observable<Post>;
  public comments$: Observable<Comment[]>;

  constructor(private route: ActivatedRoute) {
    this.post$ = this.route.data.pipe(map(data => data.post));
    this.comments$ = this.route.data.pipe(map(data => data.comments));
  }

}
