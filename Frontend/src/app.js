import Config from './config/config'
import Run from './config/run'

import './components'
import './controllers'
import './services'

import './config/template-cache'

const requires = [ 
    'ngAria',
    'ngSanitize',
    'ngStorage',
    'ui.router',
    'textAngular',
    'app.templates',
    'heroic.components',
    'heroic.controllers',
    'heroic.services'
] 

window.app = angular.module('heroic', requires)
angular.module('heroic').config(Config)
angular.module('heroic').run(Run)
angular.module('heroic').directive('clickOff', function ($parse, $document) {
    var dir = {
        compile: function ($element, attr) {
            var fn = $parse(attr['clickOff'])
            return function (scope, element, attr) {
                element.bind('click', function (event) {
                    event.stopPropagation()
                })
                angular.element($document[0].body).bind('click', function (event) {
                    scope.$apply(function () {
                        fn(scope, {
                            $event: event
                        })
                    })
                })
            }
        }
    }
    return dir 
})

angular.bootstrap(document, ['heroic'], {
    strictDi: true
})