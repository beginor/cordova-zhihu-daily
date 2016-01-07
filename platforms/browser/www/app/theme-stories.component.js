System.register(['angular2/core', 'angular2/router', './model.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, model_service_1;
    var ThemeStoriesComponent;
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
            }],
        execute: function() {
            ThemeStoriesComponent = (function () {
                function ThemeStoriesComponent(routeParams, service) {
                    this.routeParams = routeParams;
                    this.service = service;
                    this.themeStory = { stories: [] };
                }
                ThemeStoriesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.id = this.routeParams.get("id");
                    this.service.getThemeStory(this.id).then(function (data) {
                        _this.themeStory = data;
                    });
                };
                ThemeStoriesComponent = __decorate([
                    core_1.Component({
                        selector: 'theme-stories',
                        templateUrl: 'app/theme-stories.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, model_service_1.ModelService])
                ], ThemeStoriesComponent);
                return ThemeStoriesComponent;
            })();
            exports_1("ThemeStoriesComponent", ThemeStoriesComponent);
        }
    }
});
//# sourceMappingURL=theme-stories.component.js.map