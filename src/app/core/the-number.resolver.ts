import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

const THE_NUMBER = 11;

@Injectable({
  providedIn: 'root',
})
export class TheNumberResolver implements Resolve<number> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): number {
    const id = +route.paramMap.get('id');
    const thenumber = id * THE_NUMBER;
    console.log('TheNumberResolver has been called. Returning value:', thenumber, 'id:', id);
    return thenumber;
  }
}
