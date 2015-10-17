'use strict';
angular.module('Interview', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $stateProvider
      .state('main', {
        abstract: true,
        url: '/',
        template: '<ui-view/>'
      })
      .state('main.frontpage', {
        url: '',
        templateUrl: '/render/frontpage/instructions'
      })
      .state('main.users', {
        abstract: true,
        url: 'user/',
        template: '</ui-view>'
      })
      .state('main.users.editableList', {
        url: 'editableList',
        templateUrl: 'render/users/editableList'
      })
      .state('main.users.pagedList', {
        url: 'pagedList',
        templateUrl: 'render/users/pagedList'
      })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    })
    $urlRouterProvider.otherwise('/');
  })