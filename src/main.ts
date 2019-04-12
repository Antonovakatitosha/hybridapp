import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
// import { angularJsApp } from './app/app-js.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));

// angularJsApp.run();
