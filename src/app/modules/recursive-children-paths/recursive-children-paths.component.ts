import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'jp-recursive-children-paths',
  templateUrl: './recursive-children-paths.component.html',
  styleUrls: ['./recursive-children-paths.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecursiveChildrenPathsComponent {

  public id$: Observable<number>;

  constructor(private route: ActivatedRoute) {
    this.id$ = this.route.paramMap.pipe(map(paramsMap => +paramsMap.get('id')));
  }
}
