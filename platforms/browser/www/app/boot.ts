import { bootstrap } from 'angular2/platform/browser';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

import { AppComponent } from './app.component';
import { ModelService } from './model.service';

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, ModelService]);