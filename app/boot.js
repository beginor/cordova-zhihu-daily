System.register(['angular2/platform/browser', 'angular2/core', 'angular2/http', 'angular2/router', './app.component', './model.service'], function(exports_1) {
    var browser_1, core_1, http_1, router_1, app_component_1, model_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (model_service_1_1) {
                model_service_1 = model_service_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, model_service_1.ModelService]);
        }
    }
});
//# sourceMappingURL=boot.js.map