import {IonicApp, Page, NavController, NavParams} from 'ionic-framework/ionic';

import { OnInit } from 'angular2/core';
import { ModelService, LatestStory } from '../../model-service';

@Page({
    templateUrl: 'build/pages/latest-stories/latest-stories.html'
})
export class LatestStories implements OnInit {

    latestStory: LatestStory = { date: '', stories: [], top_stories: [] };
    
    constructor(
        private app: IonicApp,
        private nav: NavController,
        private navParams: NavParams,
        private service: ModelService
    ) {
        
    }
    
    ngOnInit() {
        this.service.getLatest().then(data => {
            this.latestStory = data;
        });
    }
    
    openStory(s) {
        
    }
}