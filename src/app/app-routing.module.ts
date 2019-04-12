import {Welcome6Component} from "./welcome-6/welcome-6.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  {path: 'welcome-6', component: Welcome6Component},
  {path: 'welcome-js', loadChildren: './app-js.module#AppJsModule', data: {preload: true}},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
