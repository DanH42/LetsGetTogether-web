"use strict";angular.module("g2gApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","mymap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/detail/:id",{templateUrl:"views/detail.html",controller:"DetailCtrl"}).when("/auth/:token",{templateUrl:"views/auth.html",controller:"AuthCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("g2gApp").controller("MainCtrl",["$scope","$http",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(b){a.$apply(function(){a.position=b}),console.log(a.position.coords.latitude),console.log(a.position.coords.longitude)})}]),angular.module("g2gApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("g2gApp").controller("DetailCtrl",["$scope","$routeParams","$http",function(a,b){a.params=b,a.id=a.params.id,console.log("ID: "+a.id),a.name=null,a.email=null,"100006732908567"==a.id&&(a.name="Minja Gaso",a.email="minja.gaso@outlook.com"),"568917034"==a.id&&(a.name="Filip Gaso",a.email="gaso2@illinois.edu")}]),angular.module("mymap",[]).directive("myMap",function(){return{link:function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(a){console.log("lat: "+a.coords.latitude),console.log("lon: "+a.coords.longitude)})}}}),angular.module("g2gApp").controller("AuthCtrl",["$scope","$routeParams",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.params=b,console.log(a.params),$http.post("/api/getUserData").success(function(a){console.log(a)}).error(function(a,b,c,d){console.log("error"),console.log(a),console.log(b),console.log(c),console.log(d)})}]);