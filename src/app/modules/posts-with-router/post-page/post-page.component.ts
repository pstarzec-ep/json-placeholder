import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Post } from '@app/models';

@Component({
  selector: 'jp-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostPageComponent {

  public post$: Observable<Post>;

  constructor(private route: ActivatedRoute) {
    this.post$ = this.route.data.pipe(map(data => data.post));
  }

}
