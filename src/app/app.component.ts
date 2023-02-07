import { Component } from '@angular/core';
import { ElectronService } from './core/services';
import { APP_CONFIG } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private electronService: ElectronService,
  ) {
    console.log(this.electronService.isElectron ? 'Running in Electron' : 'Running in browser')
    console.log('APP_CONFIG', APP_CONFIG);
  }
}
