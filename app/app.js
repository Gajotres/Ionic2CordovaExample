import {App, Platform, Config} from 'ionic/ionic';
import {HomePage} from './pages/home/home';

@App({
  templateUrl: 'build/app.html'
})

export class MyApp {
  constructor(platform: Platform) {
    this.platform = platform;
    this.root = HomePage;
  }
}
