System.register(['angular2/http', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var ModelService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ModelService = (function () {
                function ModelService(http) {
                    this.http = http;
                    this.baseUrl = 'http://news-at.zhihu.com/api/4/';
                }
                ModelService.prototype.getLatest = function () {
                    var _this = this;
                    var promise = new Promise(function (resolve, reject) {
                        try {
                            _this.http.get(_this.baseUrl + 'stories/latest').subscribe(function (res) {
                                var json = res.json();
                                resolve(json);
                            });
                        }
                        catch (error) {
                            reject(error);
                        }
                    });
                    return promise;
                };
                ModelService.prototype.getThemes = function () {
                    var _this = this;
                    var promise = new Promise(function (resolve, reject) {
                        try {
                            _this.http.get(_this.baseUrl + 'themes').subscribe(function (res) {
                                var json = res.json();
                                resolve(json);
                            });
                        }
                        catch (error) {
                            reject(error);
                        }
                    });
                    return promise;
                };
                ModelService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ModelService);
                return ModelService;
            })();
            exports_1("ModelService", ModelService);
        }
    }
});
//# sourceMappingURL=model.service.js.map