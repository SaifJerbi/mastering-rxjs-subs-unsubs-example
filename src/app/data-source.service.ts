import { Injectable } from "@angular/core";
import { interval, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class DataSourceService {
  constructor() {}

  watchDataChanges(): Observable<string> {
    return interval(1000).pipe(map(v => v.toString()));
  }
}
