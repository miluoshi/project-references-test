import { Component } from '@angular/core';
import { bar } from '@foo/bar';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent],
  selector: 'foo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'foo-bar-app';

  constructor() {
    bar();
  }
}
