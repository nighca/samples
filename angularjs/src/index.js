import angular from 'angular'
import template from './template.html'

angular.module('fec', [])
.run(function($rootScope) {
  'ngInject'
  console.log($rootScope)
})
.component('app', {
  template
})

angular.bootstrap(document, ['fec'])
