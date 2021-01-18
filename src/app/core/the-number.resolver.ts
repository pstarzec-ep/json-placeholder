import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

const THE_NUMBER = 11;

@Injectable({
  providedIn: 'root',
})
export class TheNumberResolver implements Resolve<number> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): number {
    const id = +route.paramMap.get('id');
    const thenumber = id * THE_NUMBER;
    console.log('TheNumberResolver has been called. Returning value:', thenumber);
    return thenumber;
  }
}
