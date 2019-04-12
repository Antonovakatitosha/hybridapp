import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {welcomeJsModule} from "./welcome-js/welcome-js.module";
import {UpgradeModule} from "@angular/upgrade/static";
import {setUpLocationSync} from "@angular/router/upgrade";

@NgModule({
  imports: [
    UpgradeModule,
    RouterModule.forChild([])
  ]
})
export class AppJsModule {
  constructor(private upgrade: UpgradeModule) {
    this.upgrade.bootstrap(document.body, [welcomeJsModule.name]);
    setUpLocationSync(upgrade);
  }
}
