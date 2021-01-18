import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'jp-recursive-paths',
  templateUrl: './recursive-paths.component.html',
  styleUrls: ['./recursive-paths.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecursivePathsComponent {

  public id$: Observable<number>;
  public theNumber$: Observable<number>;

  constructor(private route: ActivatedRoute) {
    this.id$ = this.route.paramMap.pipe(map(paramsMap => +paramsMap.get('id')));
    this.theNumber$ = this.route.data.pipe(map(data => data.theNumber));
  }

}
