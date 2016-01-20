System.config({
    packages: {
        build: {
            format: 'register',
            defaultExtension: 'js'
        }
    },
    map: {
        'ionic-framework': 'ionic'
    }
});
document.addEventListener('deviceready', function () {
    System.import('./build/app').then(
        function (r) {},
        function (err) {}
    );
}, false);
