import {App, IonicApp, Platform, Config} from 'ionic-framework/ionic';

import { Component } from 'angular2/core';

import { LatestStories } from './pages/latest-stories/latest-stories';
import { ThemeStories }  from './pages/theme-stories/theme-stories';
import { ModelService, Themes, Theme, LatestStory } from './model-service';

@App({
    templateUrl: 'build/app.html',
    // Check out the config API docs for more info
    // http://ionicframework.com/docs/v2/api/config/Config/
    config: {
        //iconMode: 'md',
        //menuType: 'overlay'
    }
})
@Component({
    providers: [ModelService],
    selector: 'ion-app'
})
class MyApp {

    rootPage: any;

    themes: Themes = {
        limit: 0,
        subscribed: [],
        others: []
    };
    
  constructor(private app: IonicApp, private platform: Platform, private service: ModelService) {

    this.initializeApp();

    this.rootPage = LatestStories;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');

      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      //window.Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // window.StatusBar.setStyle(StatusBar.LIGHT_CONTENT)

    });
    this.service.getThemes().then(data => {
        this.themes = data;
    });
  }

  openTheme(t: Theme) {
    let nav = this.app.getComponent('nav');
    if (t.id > 0) {
        nav.setRoot(ThemeStories, { id: t.id });
    }
    else {
        nav.setRoot(LatestStories);
    }
  }
}