import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'jp-named-routers',
  templateUrl: './named-routers.component.html',
  styleUrls: ['./named-routers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NamedRoutersComponent {

  public id$: Observable<number>;
  public theNumber$: Observable<number>;

  constructor(private route: ActivatedRoute) {
    this.id$ = this.route.paramMap.pipe(map(paramsMap => +paramsMap.get('id')));
    this.theNumber$ = this.route.data.pipe(map(data => data.theNumber));
  }
}
