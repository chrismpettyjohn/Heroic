import states from './states.json'

export default function Config($locationProvider, $urlRouterProvider, $stateProvider, $httpProvider, $provide)
{
    'ngInject'

    $locationProvider.html5Mode(true)
    $locationProvider.hashPrefix('')  

    $urlRouterProvider.otherwise('/')

    if(states != null || states.length != 0)
  	{
  		angular.forEach(states, (value, key) =>
  		{
  			$stateProvider.state(value.name, value)
  		})
  	}

    $httpProvider.interceptors.push('JWTService')
    $httpProvider.interceptors.push('PromiseService')

    $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function(taRegisterTool, taOptions) {
      taOptions.forceTextAngularSanitize = false 
      taOptions.toolbar = [
        ['h1', 'h2', 'p', 'pre', 'quote', 'bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear', 'insertImage','insertLink', 'insertVideo']
      ]
      return taOptions 
    }])
}
  