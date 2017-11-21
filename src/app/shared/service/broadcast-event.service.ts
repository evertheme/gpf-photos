import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

interface BroadcastEvent {
  key: any;
  data: any;
}

@Injectable()
export class BroadcastEventService {
  private _eventBus: Subject<BroadcastEvent>;

  constructor() {
    this._eventBus = new Subject<BroadcastEvent>();
  }

  broadcast(key: any, data: any) {
    this._eventBus.next({key, data});
  }

  on(key: any): Observable<any> {
    return this._eventBus.asObservable()
      .filter(event => event.key === key)
      .map(event => event.data);
  }
}
