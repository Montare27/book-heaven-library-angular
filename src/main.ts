import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {provideRouter} from "@angular/router";
import routes from "./app/routes";
import {provideProtractorTestingSupport} from "@angular/platform-browser";


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
