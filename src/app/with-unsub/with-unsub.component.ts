import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { finalize, tap } from "rxjs/operators";
import { DataSourceService } from "../data-source.service";

@Component({
  selector: "app-with-unsub",
  templateUrl: "./with-unsub.component.html",
  styleUrls: ["./with-unsub.component.css"]
})
export class WithUnsubComponent implements OnInit, OnDestroy {
  data: string;
  unsub: Subscription;

  constructor(private dataSource: DataSourceService) {}

  ngOnInit() {
    this.unsub = this.dataSource
      .watchDataChanges()
      .pipe(
        tap(data => console.log("With Unsubscribe " + data)),
        finalize(() => {
          console.log(
            "----------- With Unsubscribe ---------- : stream completed"
          );
        })
      )
      .subscribe(data => (this.data = data));
  }

  ngOnDestroy() {
    if (this.unsub) {
      this.unsub.unsubscribe();
      console.log("With Unsub: unsubscribe observable");
    }
  }
}
