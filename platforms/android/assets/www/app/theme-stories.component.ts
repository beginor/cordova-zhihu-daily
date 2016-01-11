import { Component, OnInit } from 'angular2/core';
import { RouteParams, ROUTER_DIRECTIVES } from 'angular2/router';
import { ThemeStory, ModelService } from './model.service';

@Component({
    selector: 'theme-stories',
    templateUrl: 'app/theme-stories.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class ThemeStoriesComponent implements OnInit {

    id: string;
    themeStory: ThemeStory = { stories: [] };

    constructor(
        private routeParams: RouteParams,
        private service: ModelService
        ) {  }

    ngOnInit() {
        this.id = this.routeParams.get("id");
        this.service.getThemeStory(this.id).then(data => {
            this.themeStory = data;
        });
    }
}