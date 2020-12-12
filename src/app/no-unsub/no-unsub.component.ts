import { Component, OnInit } from "@angular/core";
import { finalize, tap } from "rxjs/operators";
import { DataSourceService } from "../data-source.service";

@Component({
  selector: "app-no-unsub",
  templateUrl: "./no-unsub.component.html",
  styleUrls: ["./no-unsub.component.css"]
})
export class NoUnsubComponent implements OnInit {
  data: string;

  constructor(private dataSource: DataSourceService) {}

  ngOnInit() {
    this.dataSource
      .watchDataChanges()
      .pipe(
        tap(data =>
          console.log("----------- No Unsubscribe ---------- " + data)
        ),
        finalize(() => {
          console.log(
            "----------- With Async Pipe ---------- : stream completed"
          );
        })
      )
      .subscribe(data => (this.data = data));
  }
}
