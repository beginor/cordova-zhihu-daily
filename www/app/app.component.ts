import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { Theme, Themes, ModelService } from './model.service';
import { LatestStoriesComponent } from './latest-stories.component';
import { ThemeStoriesComponent } from './theme-stories.component';
import { StoryDetailComponent } from './story-detail.component'

@Component({
    selector: 'body',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', redirectTo: ['LatestStories'] },
    { path: '/latest', name: 'LatestStories', component: LatestStoriesComponent },
    { path: '/themes/:id', name: 'ThemeStories', component: ThemeStoriesComponent },
    { path: '/stories/:id', name: 'StoryDetail', component: StoryDetailComponent }
])
export class AppComponent implements OnInit {
    
    themes: Themes = {
        limit: 0,
        subscribed: [],
        others: []
    };

    constructor(private service: ModelService) {
    }

    ngOnInit() {
        this.service.getThemes().then(data => {
            this.themes = data;
        });
    }
}