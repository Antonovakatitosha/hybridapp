import * as angular from 'angular';
import uiRouter from "@uirouter/angularjs";
import ngMaterial from "angular-material";

export const welcomeJsModule = angular.module('welcomeJsModule', [uiRouter, ngMaterial]);

welcomeJsModule
  .controller('welcomeJSCtrl', function ($scope, $stateParams) {
    $scope.inputValue = $stateParams.init3;
  });

welcomeJsModule
  .config([
    '$stateProvider', '$locationProvider', '$urlRouterProvider',
    ($stateProvider, $locationProvider, $urlRouterProvider) => {
      $locationProvider.html5Mode(true);
      states.forEach(state => $stateProvider.state(state));
      $urlRouterProvider.otherwise('/');
    }]);

const states = [
  {
    name: 'welcome-js',
    url: '/welcome-js?init3',
    templateUrl: 'welcome-js.page.html',
    controller: 'welcomeJSCtrl'
  },
  {
    name: 'welcome-6',
    url: '/welcome-6?init2',
    template: ''
  },
  {
    name: 'not-found',
    url: '/not-found',
    template: ''
  },
];
