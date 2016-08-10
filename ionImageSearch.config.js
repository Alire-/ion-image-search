angular.module('ion-image-search').
    config(function($provide) {
        "use strict";

        var searchProviders = {
            Bing: 'bingSearch',
        };

        var imgSizes = {
            small: 'small'
        };

        var fileTypes = {
            png: 'png',
            gif: 'gif',
            jpg: 'jpg'
        };

        var defaultConfiguration = {
            searchProviders: [searchProviders.Bing],
            imgSize: imgSizes.small,
            fileType: fileTypes.gif,
            maxSuccessiveFails: 5
        };

        var bingParams = {
            address: 'https://api.datamarket.azure.com/Bing/Search/v1/Image?',
            key: 'APLIGURMq0ikyaRYEMaiSvhVhlebR7E2LsLuj0fWYeg',
            auth: 'Basic ',
            pageSize: 50
        };

        $provide.value('ionImageSearchProviders', searchProviders);
        $provide.value('ionImageSearchDefaultConfiguration', defaultConfiguration);
        $provide.value('bingParams', bingParams);

    });
