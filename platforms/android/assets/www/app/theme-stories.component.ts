import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

@Component({
    selector: 'theme-stories',
    template: '<h2>{{id}}</h2>'
})
export class ThemeStoriesComponent implements OnInit {

    id: string;

    constructor(private routeParams: RouteParams) {  }

    ngOnInit() {
        this.id = this.routeParams.get("id");
    }
}