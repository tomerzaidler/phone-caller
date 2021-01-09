import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private _mainScrollOffset$ = new BehaviorSubject<number>(0);
  get mainScrollOffsetObservable(): Observable<number> {return this._mainScrollOffset$.asObservable();};
  set mainScrollOffset(value: number) {this._mainScrollOffset$.next(value);};

  constructor() { }

}
