import { Component, OnInit } from 'angular2/core';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { LatestStory, Story, ModelService } from './model.service';

@Component({
    selector: 'latest-stories',
    templateUrl: 'app/latest-stories.component.html'
})
export class LatestStoriesComponent implements OnInit {

    latestStory: LatestStory = { date: '', stories: [], top_stories: [] };
    
    constructor(private service: ModelService) { }

    ngOnInit() {
        this.service.getLatest().then(data => {
            this.latestStory = data;
        });
    }
}