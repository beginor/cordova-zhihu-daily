import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { StoryDetail, ModelService } from './model.service';

@Component({
    selector: 'story-detail',
    templateUrl: 'app/story-detail.component.html',
    styles: [`
        .story-image-place-holder {
            position:absolute;
            top: 0px;
            height: 200px;
            width: 100%;
            text-align: center;
            margin-top: 20px;
        }
        .story-image {
            height: 200px;
            width: 318px;
        }
    `]
})
export class StoryDetailComponent implements OnInit {
    
    storyDetail: StoryDetail = {};

    constructor(private routeParams: RouteParams, private service: ModelService) {}

    ngOnInit() {
        var id = this.routeParams.get('id');
        this.service.getStoryDetail(id).then(data => {
            this.storyDetail = data;
        });
    }
}