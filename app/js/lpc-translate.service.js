angular.module('LpcWebTest2018')
    .service('LpcTranslateService', ['$http', '$rootScope', function ($http, $rootScope) {

        //TODO
        var urlProperties = "";
        setPropertiesUrlImpl = function (url) {
            urlProperties = url
        },
            loadPropertiesImpl = function () {
                //Load properties
                $http.get(urlProperties).then(function (properties) {
                    $rootScope.properties = properties.data;
                }, function (reason) {
                    console.log("error occured while getting properties");
                }, function (value) {
                    console.log("no callback");
                });
            }

        return {
            setPropertiesUrl: setPropertiesUrlImpl,
            loadProperties: loadPropertiesImpl
        }
    }]);
