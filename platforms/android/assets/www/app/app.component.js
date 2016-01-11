System.register(['angular2/core', 'angular2/router', './model.service', './latest-stories.component', './theme-stories.component', './story-detail.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, model_service_1, latest_stories_component_1, theme_stories_component_1, story_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (model_service_1_1) {
                model_service_1 = model_service_1_1;
            },
            function (latest_stories_component_1_1) {
                latest_stories_component_1 = latest_stories_component_1_1;
            },
            function (theme_stories_component_1_1) {
                theme_stories_component_1 = theme_stories_component_1_1;
            },
            function (story_detail_component_1_1) {
                story_detail_component_1 = story_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(service) {
                    this.service = service;
                    this.themes = {
                        limit: 0,
                        subscribed: [],
                        others: []
                    };
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.service.getThemes().then(function (data) {
                        _this.themes = data;
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'body',
                        templateUrl: 'app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', redirectTo: ['LatestStories'] },
                        { path: '/latest', name: 'LatestStories', component: latest_stories_component_1.LatestStoriesComponent },
                        { path: '/themes/:id', name: 'ThemeStories', component: theme_stories_component_1.ThemeStoriesComponent },
                        { path: '/stories/:id', name: 'StoryDetail', component: story_detail_component_1.StoryDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [model_service_1.ModelService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map