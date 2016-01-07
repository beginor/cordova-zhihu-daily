import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

@Component({
    selector: 'story-detail',
    template: '<h2>{{id}}</h2>'
})
export class StoryDetailComponent implements OnInit {
    
    id: string;

    constructor(private routeParams: RouteParams) {}

    ngOnInit() {
        this.id = this.routeParams.get('id');
    }
}