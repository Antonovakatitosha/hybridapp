import {NgModule} from "@angular/core";
import {MatButtonModule, MatInputModule} from "@angular/material";

const matModules = [
  MatButtonModule,
  MatInputModule,
];

@NgModule({
  imports: [...matModules],
  exports: [...matModules]
})
export class MaterialModule {

}
