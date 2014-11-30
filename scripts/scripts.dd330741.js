"use strict";angular.module("g2gApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","userdata","checkin"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/detail/:id",{templateUrl:"views/detail.html",controller:"DetailCtrl"}).when("/auth/:token",{templateUrl:"views/auth.html",controller:"AuthCtrl"}).when("/loggedout",{templateUrl:"views/loggedout.html",controller:"LoggedoutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("g2gApp").controller("MainCtrl",["$scope","$http","UserDataService","CheckInService",function(a,b,c,d){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(b){a.$apply(function(){a.position=b})}),"localStorage"in window&&null!==window.localStorage&&(console.log("Check for localStorage userId"),console.log(localStorage.getItem("userId")),a.id=null!==localStorage.getItem("userId")?localStorage.getItem("userId"):"unidentified",console.log("After localStorage check, userId is..."),console.log(a.id),null!==localStorage.getItem("userImage")&&(a.image=localStorage.getItem("userImage")),null!==localStorage.getItem("userLongitude")&&(a.longitude=localStorage.getItem("userLongitude")),null!==localStorage.getItem("userLatitude")&&(a.latitude=localStorage.getItem("userLatitude")),null!==localStorage.getItem("userFullName")&&(a.name=localStorage.getItem("userFullName")),d.get().then(function(b){a.response=b,console.log("Response"),console.log(a.response)},function(){console.log("MainCtrl::UserDataService::Error")}))}]),angular.module("g2gApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("g2gApp").controller("DetailCtrl",["$scope","$routeParams","$http",function(a,b){a.params=b,a.id=a.params.id,console.log("ID: "+a.id),a.name=null,a.email=null,"100006732908567"==a.id&&(a.name="Minja Gaso",a.email="minja.gaso@outlook.com"),"568917034"==a.id&&(a.name="Filip Gaso",a.email="gaso2@illinois.edu")}]),angular.module("g2gApp").controller("AuthCtrl",["$scope","$routeParams","$http","UserDataService",function(a,b,c,d){a.params=b,"localStorage"in window&&null!==window.localStorage&&(localStorage.setItem("token",""+a.params.token),d.get().then(function(b){a.response=b,console.log("Response"),console.log(a.response),a.data=a.response.data,console.log("Data"),console.log(a.data),a.user=a.data.data,a.id=a.user.id,a.image=a.user.image,a.longitude=a.user.location[0],a.latitude=a.user.location[1],a.name=a.user.name,localStorage.setItem("userId",""+a.id),localStorage.setItem("userImage",""+a.image),localStorage.setItem("userLongitude",""+a.longitude),localStorage.setItem("userLatitude",""+a.latitude),localStorage.setItem("userFullName",""+a.name),console.log("Getting userID from localStorage..."),console.log(localStorage.getItem("userId"))},function(){console.log("MainCtrl::UserDataService::Error")}))}]),angular.module("g2gApp").controller("LoggedoutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("userdata",[]).factory("UserDataService",["$http",function(a){var b={get:function(){return a.post("/api/getUserData",{token:localStorage.getItem("token")}).success(function(){console.log("UserDataService::success")}).error(function(){console.log("UserDataService::error")})}};return b}]),angular.module("checkin",[]).factory("CheckInService",["$http",function(a){var b={get:function(){return a.post("/api/checkin",{token:localStorage.getItem("token"),lat:localStorage.getItem("userLatitude"),lng:localStorage.getItem("userLongitude"),accuracy:4}).success(function(a){console.log("CheckInService::success"),console.log(a)}).error(function(){console.log("CheckInService::error")})}};return b}]);