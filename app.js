var data1="Hello";

var app = angular.module('MyApp',['ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when("/",{
            templateUrl:'home.html',

        }).when('/home',{
            templateUrl:'home.html'

        }) .when('/about',{
            templateUrl:'about.html'

        }).when('/gallery',{
                templateUrl:'gallery.html'

            }).when('/causes',{
                templateUrl:'causes.html'

            }).when('/causes-single',{
            templateUrl:'causes-single.html'

        }) .when('/contact',{
            templateUrl:'contact.html'

        })

    }

)

app.controller('GameController',function($scope){
        $scope.var2= {
            gaameName1: "Top Game",
            gaameName2: "Top PVP item",
            gaameName3: "Top Gaming Hardware"
        };
        });

