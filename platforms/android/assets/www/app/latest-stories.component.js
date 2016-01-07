System.register(['angular2/core', './model.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, model_service_1;
    var LatestStoriesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (model_service_1_1) {
                model_service_1 = model_service_1_1;
            }],
        execute: function() {
            LatestStoriesComponent = (function () {
                function LatestStoriesComponent(service) {
                    this.service = service;
                    this.latestStory = { date: '', stories: [], top_stories: [] };
                }
                LatestStoriesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.service.getLatest().then(function (data) {
                        _this.latestStory = data;
                    });
                };
                LatestStoriesComponent = __decorate([
                    core_1.Component({
                        selector: 'latest-stories',
                        templateUrl: 'app/latest-stories.component.html'
                    }), 
                    __metadata('design:paramtypes', [model_service_1.ModelService])
                ], LatestStoriesComponent);
                return LatestStoriesComponent;
            })();
            exports_1("LatestStoriesComponent", LatestStoriesComponent);
        }
    }
});
//# sourceMappingURL=latest-stories.component.js.map