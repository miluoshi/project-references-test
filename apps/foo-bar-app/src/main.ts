import { bootstrapApplication } from '@angular/platform-browser';
import { bar } from '@foo/bar';
import { AppComponent } from './app/app.component';

bar();
bootstrapApplication(AppComponent, {
  providers: [],
}).catch((err) => console.error(err));
