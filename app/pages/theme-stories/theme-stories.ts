import {IonicApp, Page, NavController, NavParams} from 'ionic-framework/ionic';

import { OnInit } from 'angular2/core';
import { ModelService, ThemeStory } from '../../model-service';

@Page ({
    templateUrl: 'build/pages/theme-stories/theme-stories.html'
})
export class ThemeStories implements OnInit {

    id: string;
    themeStory: ThemeStory = { stories: [] };

    constructor(
        private app: IonicApp,
        private nav: NavController,
        private navParams: NavParams,
        private service: ModelService
    ) {
        this.id = navParams.get('id');
    }

    ngOnInit() {
        this.service.getThemeStory(this.id).then(data => {
            this.themeStory = data;
        });
    }
    
}