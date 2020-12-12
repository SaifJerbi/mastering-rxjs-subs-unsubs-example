import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NoUnsubComponent } from "./no-unsub/no-unsub.component";
import { WithUnsubComponent } from "./with-unsub/with-unsub.component";
import { WithAsyncPipeComponent } from "./with-async-pipe/with-async-pipe.component";
import { DataSourceService } from './data-source.service';

const routes: Routes = [
  {
    path: "with-async-pipe",
    component: WithAsyncPipeComponent
  },
  {
    path: "with-unsub",
    component: WithUnsubComponent
  },
  {
    path: "no-unsub",
    component: NoUnsubComponent
  },
  {
    path: "",
    component: WithAsyncPipeComponent
  }
];
@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    HelloComponent,
    NoUnsubComponent,
    WithUnsubComponent,
    WithAsyncPipeComponent
  ],
  bootstrap: [AppComponent],
  providers: [DataSourceService]
})
export class AppModule {}
