import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { finalize, tap } from "rxjs/operators";
import { DataSourceService } from "../data-source.service";

@Component({
  selector: "app-with-async-pipe",
  templateUrl: "./with-async-pipe.component.html",
  styleUrls: ["./with-async-pipe.component.css"]
})
export class WithAsyncPipeComponent implements OnInit {
  data$: Observable<string>;
  constructor(private dataSource: DataSourceService) {}

  ngOnInit() {
    this.data$ = this.dataSource.watchDataChanges().pipe(
      tap(data => console.log("With Async Pipe " + data)),
      finalize(() => {
        console.log("With Async Pipe : stream completed");
      })
    );
  }
}
